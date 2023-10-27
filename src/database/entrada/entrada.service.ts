import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateEntradaInput } from './dto/create-entrada.input';
import { UpdateEntradaInput } from './dto/update-entrada.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Entrada } from './entities/entrada.entity';

@Injectable()
export class EntradaService {
  constructor(
    @InjectRepository(Entrada)
    private entradaRepository: Repository<Entrada>,
  ) {}

  async create(createEntradaInput: CreateEntradaInput) {
    const entrada = this.entradaRepository.create(createEntradaInput);
    const entradaSaved = await this.entradaRepository.save(entrada);

    if (!entradaSaved) {
      throw new InternalServerErrorException('Erro ao salvar Entrada');
    }

    return entradaSaved;
  }

  async findAll() {
    const entradas = await this.entradaRepository.find();
    return entradas;
  }

  async findOne(id: any) {
    const entrada = await this.entradaRepository.findOne(id);
    if (!entrada) {
      throw new NotFoundException(`Entrada with ID #${id} not found`);
    }
    return entrada;
  }

  async update(
    id: number,
    updateEntradaInput: UpdateEntradaInput,
  ): Promise<Entrada> {
    const entrada = await this.findOne(id);

    if (!entrada) {
      throw new NotFoundException(`Entrada with ID #${id} not found`);
    }

    await this.entradaRepository.update(entrada, { ...updateEntradaInput });

    const entradaUpdate = this.entradaRepository.create({
      ...entrada,
      ...updateEntradaInput,
    });

    return entradaUpdate;
  }

  async remove(id: number): Promise<Entrada> {
    const entrada = await this.findOne(id);
    return await this.entradaRepository.remove(entrada);
  }
}
