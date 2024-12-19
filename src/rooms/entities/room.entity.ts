import { Entreprise } from 'src/entreprises/entities/entreprise.entity';
import { Equipement } from 'src/equipements/entities/equipement.entity';
import { TimesTampEntity } from 'src/orm/timestamp/timestamp.entity/timestamp.entity';
import { Prestataire } from 'src/prestataires/entities/prestataire.entity';

import {TypeRoom} from "src/type-room/entities/type-room.entity"

import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
  JoinTable
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
  @ManyToOne(()=>Entreprise,entreprise=>entreprise.rooms)
  @JoinColumn()
  entreprise:Entreprise

  @OneToMany(()=>Equipement,equipement=>equipement.room)
  equipements:Equipement[]

  @ManyToMany(()=>Prestataire,prestataire=>prestataire.rooms)
  @JoinTable()
  prestataires:Prestataire[]


}
