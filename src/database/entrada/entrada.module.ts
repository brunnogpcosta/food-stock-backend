import { Module } from '@nestjs/common';
import { EntradaService } from './entrada.service';
import { EntradaResolver } from './entrada.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entrada } from './entities/entrada.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Entrada])],
  providers: [EntradaResolver, EntradaService],
})
export class EntradaModule {}
