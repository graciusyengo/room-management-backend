import { IsNumber, IsString } from "class-validator";

export class CreateEquipementDto {

    @IsString()
    nom:string

    @IsNumber()
    quantite:number
}
