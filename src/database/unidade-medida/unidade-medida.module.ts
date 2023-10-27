import { Module } from '@nestjs/common';
import { UnidadeMedidaService } from './unidade-medida.service';
import { UnidadeMedidaResolver } from './unidade-medida.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnidadeMedida } from './entities/unidade-medida.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UnidadeMedida])],
  providers: [UnidadeMedidaResolver, UnidadeMedidaService],
})
export class UnidadeMedidaModule {}
