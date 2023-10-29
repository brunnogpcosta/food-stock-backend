import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateEstoqueInput } from './dto/create-estoque.input';
import { UpdateEstoqueInput } from './dto/update-estoque.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Estoque } from './entities/estoque.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EstoqueService {
  constructor(
    @InjectRepository(Estoque)
    private estoqueRepository: Repository<Estoque>,
  ) {}

  async create(createEstoqueInput: CreateEstoqueInput) {
    const estoque = this.estoqueRepository.create(createEstoqueInput);
    const estoqueSaved = await this.estoqueRepository.save(estoque);

    if (!estoqueSaved) {
      throw new InternalServerErrorException('Erro ao salvar Estoque');
    }

    return estoqueSaved;
  }

  async findAll() {
    const estoques = await this.estoqueRepository.find();
    return estoques;
  }

  async findOne(id: any) {
    const estoque = await this.estoqueRepository.findOneBy(id);
    if (!estoque) {
      throw new NotFoundException(`estoque with ID #${id} not found`);
    }
    return estoque;
  }

  async update(
    id: number,
    updateEstoqueInput: UpdateEstoqueInput,
  ): Promise<Estoque> {
    const estoque = await this.findOne(id);

    if (!estoque) {
      throw new NotFoundException(`Estoque with ID #${id} not found`);
    }

    await this.estoqueRepository.update(estoque, { ...updateEstoqueInput });

    const estoqueUpdate = this.estoqueRepository.create({
      ...estoque,
      ...updateEstoqueInput,
    });

    return estoqueUpdate;
  }

  async remove(id: number): Promise<Estoque> {
    const estoque = await this.findOne(id);
    return await this.estoqueRepository.remove(estoque);
  }
}
