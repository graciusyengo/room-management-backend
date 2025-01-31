import {  IsString, MaxLength } from "class-validator";


export class CreateTypeRoomDto {

@IsString()
type:string

@IsString()
description:string

@IsString()
icon:string
}
