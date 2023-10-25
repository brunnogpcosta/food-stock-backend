import { Module } from '@nestjs/common';
import { AlimentoService } from './alimento.service';
import { AlimentoResolver } from './alimento.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alimento } from './entities/alimento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Alimento])],
  providers: [AlimentoResolver, AlimentoService],
})
export class AlimentoModule {}
