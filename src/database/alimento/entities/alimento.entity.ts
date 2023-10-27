import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { UnidadeMedida } from '../../unidade-medida/entities/unidade-medida.entity';
import { Entrada } from '../../entrada/entities/entrada.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Alimento {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Field()
  @Column({ type: 'varchar', length: 255 })
  nome: string;

  @Field()
  @ManyToOne(() => UnidadeMedida, (unidadeMedida) => unidadeMedida.alimentos)
  unidadeMedida: UnidadeMedida;

  @OneToMany(() => Entrada, (entrada) => entrada.alimento)
  entradas: Entrada[];
}
