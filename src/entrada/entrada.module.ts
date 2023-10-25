import { Module } from '@nestjs/common';
import { EntradaService } from './entrada.service';
import { EntradaResolver } from './entrada.resolver';

@Module({
  providers: [EntradaResolver, EntradaService],
})
export class EntradaModule {}
