import { TimesTampEntity } from 'src/orm/timestamp/timestamp.entity/timestamp.entity';

import {TypeRoom} from "src/type-room/entities/type-room.entity"

import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
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

  @ManyToOne(()=>TypeRoom,typeRoom=>typeRoom.rooms)
  @JoinColumn()
  typeRoom:TypeRoom


}
