import { Room } from "src/rooms/entities/room.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Entreprise {
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    nom:string

    @Column()
    email:string

    @Column()
    adresse:string

    @Column({ nullable: true })
    telephone: string; // Téléphone de l'entreprise

  @Column({ nullable: true })
  logo: string; // Lien vers le logo ou image de l'entreprise

  @OneToMany(()=>Room,room=>room.entreprise)
  rooms:Room[]

    
}
