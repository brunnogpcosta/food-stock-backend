import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Alimento } from '../../alimento/entities/alimento.entity';

@Entity()
export class UnidadeMedida {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nome: string;

  @OneToMany(() => Alimento, (alimento) => alimento.unidadeMedida)
  alimentos: Alimento[];
}
