import { TimesTampEntity } from "src/orm/timestamp/timestamp.entity/timestamp.entity";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity('rooms')
export class Room extends TimesTampEntity {
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    name:string

    @Column()
    adress:string

  @Column({ type: 'int', nullable: false })
  capacite: number;

  @Column({ type: 'boolean', default: true })
  disponibilite: boolean;

  @Column({ type: 'text', nullable: true })
  description: string;

 

}
