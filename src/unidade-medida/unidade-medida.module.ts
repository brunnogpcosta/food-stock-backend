import { Module } from '@nestjs/common';
import { UnidadeMedidaService } from './unidade-medida.service';
import { UnidadeMedidaResolver } from './unidade-medida.resolver';

@Module({
  providers: [UnidadeMedidaResolver, UnidadeMedidaService],
})
export class UnidadeMedidaModule {}
