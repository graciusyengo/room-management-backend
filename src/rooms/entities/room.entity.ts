import { TimesTampEntity } from 'src/orm/timestamp/timestamp.entity/timestamp.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity('rooms')
export class Room extends TimesTampEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  nom: string;

  @Column()
  adresse: string;

  @Column({ type: 'int' })
  capacite: number;

  @Column({ default: true })
  disponibilite: boolean;

  @Column({ type: 'text', nullable: true })
  images: string;

  @Column({ default: 'Disponible' })
  etat: string;

  @Column({ type: 'text', nullable: true })
  description: string;

}
