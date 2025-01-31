import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Commune {

    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column()
    nom:string

    @Column()
    description:string


}
