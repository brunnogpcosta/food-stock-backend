import { Injectable } from '@nestjs/common';
import { CreateAlimentoInput } from './dto/create-alimento.input';
import { UpdateAlimentoInput } from './dto/update-alimento.input';

@Injectable()
export class AlimentoService {
  create(createAlimentoInput: CreateAlimentoInput) {
    return 'This action adds a new alimento';
  }

  findAll() {
    return `This action returns all alimento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alimento`;
  }

  update(id: number, updateAlimentoInput: UpdateAlimentoInput) {
    return `This action updates a #${id} alimento`;
  }

  remove(id: number) {
    return `This action removes a #${id} alimento`;
  }
}
