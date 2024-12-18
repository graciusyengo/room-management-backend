import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class TypeRoom {

    @PrimaryGeneratedColumn('uuid')
    id:string
 
@Column()
type:string

@Column()
description:string
  
}
