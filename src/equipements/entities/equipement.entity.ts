import { TimesTampEntity } from "src/orm/timestamp/timestamp.entity/timestamp.entity";
import { Room } from "src/rooms/entities/room.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Equipement extends TimesTampEntity {

    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column()
    quantite:number


    @Column()
    description:string

    @ManyToOne(()=>Room,room=>room.equipements,{onDelete:'CASCADE'})
    @JoinColumn()
    room:Room

}
