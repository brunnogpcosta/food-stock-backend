import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Entrada } from '../../entrada/entities/entrada.entity';
import { Estoque } from '../../estoque/entities/estoque.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Saida {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @ManyToOne(() => Entrada, (entrada) => entrada.saidas)
  entrada: Entrada;

  @ManyToOne(() => Estoque, (estoque) => estoque.saidas)
  estoque: Estoque;

  @Column({ type: 'numeric' })
  quantidade: number;
}
