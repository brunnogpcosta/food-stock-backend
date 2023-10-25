import { Module } from '@nestjs/common';
import { SaidaService } from './saida.service';
import { SaidaResolver } from './saida.resolver';

@Module({
  providers: [SaidaResolver, SaidaService],
})
export class SaidaModule {}
