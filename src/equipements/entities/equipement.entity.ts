import { TimesTampEntity } from "src/orm/timestamp/timestamp.entity/timestamp.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Equipement extends TimesTampEntity {

    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column()
    quantite:number

}
