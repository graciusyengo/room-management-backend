import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class TypePrestataire {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    libelle: string; // Exemple : "Médecin", "Plombier", "Consultant"

    @Column()
    description: string; // Exemple : "Médecin", "Plombier", "Consultant"

}
