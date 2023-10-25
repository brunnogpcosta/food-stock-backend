import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Entrada } from '../../entrada/entities/entrada.entity';
import { Saida } from '../../saida/entities/saida.entity';

@Entity()
export class Estoque {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nome: string;

  @OneToMany(() => Entrada, (entrada) => entrada.estoque)
  entradas: Entrada[];

  @OneToMany(() => Saida, (saida) => saida.estoque)
  saidas: Saida[];
}
