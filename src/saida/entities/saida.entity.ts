import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Entrada } from '../../entrada/entities/entrada.entity';
import { Estoque } from '../../estoque/entities/estoque.entity';

@Entity()
export class Saida {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Entrada, (entrada) => entrada.saidas)
  entrada: Entrada;

  @ManyToOne(() => Estoque, (estoque) => estoque.saidas)
  estoque: Estoque;

  @Column({ type: 'numeric' })
  quantidade: number;
}
