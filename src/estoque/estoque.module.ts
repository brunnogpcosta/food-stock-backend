import { Module } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { EstoqueResolver } from './estoque.resolver';

@Module({
  providers: [EstoqueResolver, EstoqueService],
})
export class EstoqueModule {}
