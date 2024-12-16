import { TimesTampEntity } from "src/orm/timestamp/timestamp.entity/timestamp.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')

export class User extends TimesTampEntity {

    @PrimaryGeneratedColumn('uuid')

    id:string

    @Column()
    password:string

    @Column()
    email:string
    
    @Column()
    username:string


}
