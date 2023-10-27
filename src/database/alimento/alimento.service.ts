import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAlimentoInput } from './dto/create-alimento.input';
import { Alimento } from './entities/alimento.entity';
import { UpdateAlimentoInput } from './dto/update-alimento.input';

@Injectable()
export class AlimentoService {
  constructor(
    @InjectRepository(Alimento)
    private alimentoRepository: Repository<Alimento>,
  ) {}

  async create(createAlimentoInput: CreateAlimentoInput): Promise<Alimento> {
    const alimento = this.alimentoRepository.create(createAlimentoInput);
    const alimentoSaved = await this.alimentoRepository.save(alimento);

    if (!alimentoSaved) {
      throw new InternalServerErrorException('Erro ao salvar alimento');
    }

    return alimentoSaved;
  }

  async findAll(): Promise<Alimento[]> {
    const alimentos = await this.alimentoRepository.find();
    return alimentos;
  }

  async findOne(id: any): Promise<Alimento> {
    const alimento = await this.alimentoRepository.findOne(id);
    if (!alimento) {
      throw new NotFoundException(`Alimento with ID #${id} not found`);
    }
    return alimento;
  }

  async update(
    id: number,
    updateAlimentoInput: UpdateAlimentoInput,
  ): Promise<Alimento> {
    const alimento = await this.findOne(id);

    if (!alimento) {
      throw new NotFoundException(`Alimento with ID #${id} not found`);
    }

    await this.alimentoRepository.update(alimento, { ...updateAlimentoInput });

    const foodUpdate = this.alimentoRepository.create({
      ...alimento,
      ...updateAlimentoInput,
    });

    return foodUpdate;
  }

  async remove(id: number): Promise<Alimento> {
    const alimento = await this.findOne(id);
    return await this.alimentoRepository.remove(alimento);
  }
}
