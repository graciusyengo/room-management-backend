import { IsBoolean, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";
import { Column, Entity } from "typeorm";

export class CreateRoomDto {

    @IsString()
    nom: string;
  
    @IsString()
    description: string;
  
   
}
