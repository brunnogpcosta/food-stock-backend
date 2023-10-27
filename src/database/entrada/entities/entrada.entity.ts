import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Alimento } from '../../alimento/entities/alimento.entity';
import { Estoque } from '../../estoque/entities/estoque.entity';
import { Saida } from '../../saida/entities/saida.entity'; // Importe a entidade Saida
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Entrada {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @ManyToOne(() => Alimento, (alimento) => alimento.entradas)
  alimento: Alimento;

  @ManyToOne(() => Estoque, (estoque) => estoque.entradas)
  estoque: Estoque;

  @Column({ type: 'date' })
  validade: Date;

  @Column({ type: 'numeric' })
  quantidade: number;

  @OneToMany(() => Saida, (saida) => saida.entrada)
  saidas: Saida[];
}
