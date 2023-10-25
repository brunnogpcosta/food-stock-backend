import { Injectable } from '@nestjs/common';
import { CreateEstoqueInput } from './dto/create-estoque.input';
import { UpdateEstoqueInput } from './dto/update-estoque.input';

@Injectable()
export class EstoqueService {
  create(createEstoqueInput: CreateEstoqueInput) {
    return 'This action adds a new estoque';
  }

  findAll() {
    return `This action returns all estoque`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estoque`;
  }

  update(id: number, updateEstoqueInput: UpdateEstoqueInput) {
    return `This action updates a #${id} estoque`;
  }

  remove(id: number) {
    return `This action removes a #${id} estoque`;
  }
}
