import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { UnidadeMedida } from '../../unidade-medida/entities/unidade-medida.entity';
import { Entrada } from '../../entrada/entities/entrada.entity';

@Entity()
export class Alimento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nome: string;

  @ManyToOne(() => UnidadeMedida, (unidadeMedida) => unidadeMedida.alimentos)
  unidadeMedida: UnidadeMedida;

  @OneToMany(() => Entrada, (entrada) => entrada.alimento)
  entradas: Entrada[];
}
