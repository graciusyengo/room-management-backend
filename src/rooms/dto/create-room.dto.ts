import { IsBoolean, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateRoomDto {

@IsString()
name:string

@IsString()
adress:string

@IsNumber()
capacite:number

@IsBoolean()
disponibilte:boolean

@IsString()
@IsOptional()
@MaxLength(20)
etat?: string;

@IsString()
@IsOptional()
description?: string;



    
}
