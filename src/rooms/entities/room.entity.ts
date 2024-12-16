import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('rooms')
export class Room {
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    name:string

    @Column()
    adress:string
}
