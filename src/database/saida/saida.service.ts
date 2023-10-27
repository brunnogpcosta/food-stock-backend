import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateSaidaInput } from './dto/create-saida.input';
import { UpdateSaidaInput } from './dto/update-saida.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Saida } from './entities/saida.entity';

@Injectable()
export class SaidaService {
  constructor(
    @InjectRepository(Saida)
    private saidaRepository: Repository<Saida>,
  ) {}

  async create(createSaidaInput: CreateSaidaInput) {
    const saida = this.saidaRepository.create(createSaidaInput);
    const saidaSaved = await this.saidaRepository.save(saida);

    if (!saidaSaved) {
      throw new InternalServerErrorException('Erro ao salvar Saida');
    }

    return saidaSaved;
  }

  async findAll(): Promise<Saida[]> {
    const saidas = await this.saidaRepository.find();
    return saidas;
  }

  async findOne(id: any): Promise<Saida> {
    const saida = await this.saidaRepository.findOne(id);
    if (!saida) {
      throw new NotFoundException(`Saida with ID #${id} not found`);
    }
    return saida;
  }

  async update(id: number, updateSaidaInput: UpdateSaidaInput): Promise<Saida> {
    const saida = await this.findOne(id);

    if (!saida) {
      throw new NotFoundException(`Saida with ID #${id} not found`);
    }

    await this.saidaRepository.update(saida, { ...updateSaidaInput });

    const saidaUpdate = this.saidaRepository.create({
      ...saida,
      ...updateSaidaInput,
    });

    return saidaUpdate;
  }

  async remove(id: number) {
    const saida = await this.findOne(id);
    return await this.saidaRepository.remove(saida);
  }
}
