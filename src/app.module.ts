import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnidadeMedidaModule } from './unidade-medida/unidade-medida.module';
import { AlimentoModule } from './alimento/alimento.module';
import { EntradaModule } from './entrada/entrada.module';
import { SaidaModule } from './saida/saida.module';
import { EstoqueModule } from './estoque/estoque.module';
import { Alimento } from './alimento/entities/alimento.entity';
import { Entrada } from './entrada/entities/entrada.entity';
import { Estoque } from './estoque/entities/estoque.entity';
import { Saida } from './saida/entities/saida.entity';
import { UnidadeMedida } from './unidade-medida/entities/unidade-medida.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'foodstock_user',
      password: 'foodstock_password',
      database: 'foodstock_db',
      entities: [UnidadeMedida, Alimento, Entrada, Saida, Estoque],
      synchronize: true,
    }),
    UnidadeMedidaModule,
    AlimentoModule,
    EntradaModule,
    SaidaModule,
    EstoqueModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
