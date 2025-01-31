import { IsString } from "class-validator";

export class CreateCommuneDto {

    @IsString()
    nom:string

    @IsString()
    description:string
}
