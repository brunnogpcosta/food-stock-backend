import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUnidadeMedidaInput } from './dto/create-unidade-medida.input';
import { UpdateUnidadeMedidaInput } from './dto/update-unidade-medida.input';
import { InjectRepository } from '@nestjs/typeorm';
import { UnidadeMedida } from './entities/unidade-medida.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UnidadeMedidaService {
  constructor(
    @InjectRepository(UnidadeMedida)
    private unidadeMedidaRepository: Repository<UnidadeMedida>,
  ) {}

  async create(createUnidadeMedidaInput: CreateUnidadeMedidaInput) {
    const unidadeMedida = this.unidadeMedidaRepository.create(
      createUnidadeMedidaInput,
    );
    const unidadeMedidaSaved =
      await this.unidadeMedidaRepository.save(unidadeMedida);

    if (!unidadeMedidaSaved) {
      throw new InternalServerErrorException('Erro ao salvar UnidadeMedida');
    }

    return unidadeMedidaSaved;
  }

  async findAll() {
    const unidadeMedida = await this.unidadeMedidaRepository.find();
    return unidadeMedida;
  }

  async findOne(id: any) {
    const unidadeMedida = await this.unidadeMedidaRepository.findOne(id);
    if (!unidadeMedida) {
      throw new NotFoundException(`UnidadeMedida with ID #${id} not found`);
    }
    return unidadeMedida;
  }

  async update(
    id: number,
    updateUnidadeMedidaInput: UpdateUnidadeMedidaInput,
  ): Promise<UnidadeMedida> {
    const unidadeMedida = await this.findOne(id);

    if (!unidadeMedida) {
      throw new NotFoundException(`Alimento with ID #${id} not found`);
    }

    await this.unidadeMedidaRepository.update(unidadeMedida, {
      ...updateUnidadeMedidaInput,
    });

    const foodUpdate = this.unidadeMedidaRepository.create({
      ...unidadeMedida,
      ...updateUnidadeMedidaInput,
    });

    return foodUpdate;
  }

  async remove(id: number) {
    const alimento = await this.findOne(id);
    return await this.unidadeMedidaRepository.remove(alimento);
  }
}
