import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reservation {

    @PrimaryGeneratedColumn("uuid")
    id:string
    @Column()
    dateDebut:Date
    @Column()
    dateFin:Date
    @Column()
    heureDebut:string
    @Column()
    heureFin:string

    @Column()
    status:string

    @Column()
    totalAmount: number;
}
