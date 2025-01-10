import { IsString } from "class-validator";

export class CreateTypePrestataireDto {


    
    @IsString()
    libelle:string
    @IsString()
    description:string

}
