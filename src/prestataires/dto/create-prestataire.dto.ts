import { IsString } from "class-validator";

export class CreatePrestataireDto {

    @IsString()
    nom: string;

    @IsString()
    prenom: string;

    @IsString()
    email: string;

    @IsString()
    telephone: string;
}
