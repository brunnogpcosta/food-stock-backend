import { Injectable } from '@nestjs/common';
import { CreateUnidadeMedidaInput } from './dto/create-unidade-medida.input';
import { UpdateUnidadeMedidaInput } from './dto/update-unidade-medida.input';

@Injectable()
export class UnidadeMedidaService {
  create(createUnidadeMedidaInput: CreateUnidadeMedidaInput) {
    return 'This action adds a new unidadeMedida';
  }

  findAll() {
    return `This action returns all unidadeMedida`;
  }

  findOne(id: number) {
    return `This action returns a #${id} unidadeMedida`;
  }

  update(id: number, updateUnidadeMedidaInput: UpdateUnidadeMedidaInput) {
    return `This action updates a #${id} unidadeMedida`;
  }

  remove(id: number) {
    return `This action removes a #${id} unidadeMedida`;
  }
}
