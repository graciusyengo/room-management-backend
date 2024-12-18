import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
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
    telephone: string;

}
