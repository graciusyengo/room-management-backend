import { IsString } from "class-validator";

export class CreateTypePrestataireDto {


    @IsString()
    nom:string
    @IsString()
    libelle:string

}
