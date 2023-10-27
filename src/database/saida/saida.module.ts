import { Module } from '@nestjs/common';
import { SaidaService } from './saida.service';
import { SaidaResolver } from './saida.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Saida } from './entities/saida.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Saida])],
  providers: [SaidaResolver, SaidaService],
})
export class SaidaModule {}
