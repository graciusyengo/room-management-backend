import { IsBoolean, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, MaxLength } from "class-validator";
import { Column, Entity } from "typeorm";

export class CreateRoomDto {

    @IsString()
    nom: string;
  
    @IsString()
    description: string;

    @IsNotEmpty()
    adresse: string;
  
    @IsInt()
    capacite: number;
  
    @IsBoolean()
    disponibilite: boolean;
  
    @IsString()
    @IsOptional() // Ce champ est optionnel, car il peut être nul
    images: string;
  
    @IsString()
    @IsOptional() // Ce champ est optionnel
    etat: string;


    @IsUUID()
    @IsNotEmpty()
    typeRoomId:string

    @IsUUID()
    @IsNotEmpty()
    entrepriseId:string
  
   
}


