import { Module } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { EstoqueResolver } from './estoque.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estoque } from './entities/estoque.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Estoque])],
  providers: [EstoqueResolver, EstoqueService],
})
export class EstoqueModule {}
