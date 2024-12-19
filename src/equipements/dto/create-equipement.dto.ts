import { IsNumber, IsString, IsUUID } from "class-validator";

export class CreateEquipementDto {

    @IsString()
    nom:string

    @IsNumber()
    quantite:number

    @IsUUID()
    roomId:string
}
