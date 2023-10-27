import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlimentoModule } from './database/alimento/alimento.module';
import { Alimento } from './database/alimento/entities/alimento.entity';
import { Entrada } from './database/entrada/entities/entrada.entity';
import { EntradaModule } from './database/entrada/entrada.module';
import { Estoque } from './database/estoque/entities/estoque.entity';
import { EstoqueModule } from './database/estoque/estoque.module';
import { Saida } from './database/saida/entities/saida.entity';
import { SaidaModule } from './database/saida/saida.module';
import { UnidadeMedida } from './database/unidade-medida/entities/unidade-medida.entity';
import { UnidadeMedidaModule } from './database/unidade-medida/unidade-medida.module';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

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
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
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
