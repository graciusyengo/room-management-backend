import { Room } from "src/rooms/entities/room.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Prestataire {


    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nom: string;

    @Column()
    prenom: string;

    @Column({ unique: true })
    email: string;

    @Column()
    telephone: string
    @ManyToMany(()=>Room,room=>room.prestataires) 
    rooms:Room[]

}
