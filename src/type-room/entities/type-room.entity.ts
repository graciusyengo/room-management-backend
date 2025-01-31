import { Column, Entity, PrimaryGeneratedColumn,OneToMany } from "typeorm";

import {Room} from "src/rooms/entities/room.entity"

@Entity()
export class TypeRoom {

    @PrimaryGeneratedColumn('uuid')
    id:string
 
@Column()
type:string

@Column()
description:string

@Column()
icon:string

@OneToMany(()=>Room,room=>room.typeRoom)
rooms:Room[]
  
}
