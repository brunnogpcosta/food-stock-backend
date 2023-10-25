import { Injectable } from '@nestjs/common';
import { CreateEntradaInput } from './dto/create-entrada.input';
import { UpdateEntradaInput } from './dto/update-entrada.input';

@Injectable()
export class EntradaService {
  create(createEntradaInput: CreateEntradaInput) {
    return 'This action adds a new entrada';
  }

  findAll() {
    return `This action returns all entrada`;
  }

  findOne(id: number) {
    return `This action returns a #${id} entrada`;
  }

  update(id: number, updateEntradaInput: UpdateEntradaInput) {
    return `This action updates a #${id} entrada`;
  }

  remove(id: number) {
    return `This action removes a #${id} entrada`;
  }
}
