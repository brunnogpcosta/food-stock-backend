import { Injectable } from '@nestjs/common';
import { CreateSaidaInput } from './dto/create-saida.input';
import { UpdateSaidaInput } from './dto/update-saida.input';

@Injectable()
export class SaidaService {
  create(createSaidaInput: CreateSaidaInput) {
    return 'This action adds a new saida';
  }

  findAll() {
    return `This action returns all saida`;
  }

  findOne(id: number) {
    return `This action returns a #${id} saida`;
  }

  update(id: number, updateSaidaInput: UpdateSaidaInput) {
    return `This action updates a #${id} saida`;
  }

  remove(id: number) {
    return `This action removes a #${id} saida`;
  }
}
