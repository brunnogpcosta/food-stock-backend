import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Alimento } from '../../alimento/entities/alimento.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class UnidadeMedida {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nome: string;

  @OneToMany(() => Alimento, (alimento) => alimento.unidadeMedida)
  alimentos: Alimento[];
}
