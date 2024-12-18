import { IsDate, IsDecimal, IsNotEmpty, IsString } from "class-validator";

export class CreateReservationDto {

    @IsString()
    heureDebut:string
    @IsString()
    heureFin:string
    @IsString()
    dateDebut : string

    @IsString()
    dateFin : string

    @IsString()
    status:string

    @IsNotEmpty()

    totalAmount: number; // Utilise 'decimal_digits' pour indiquer deux chiffres après la virgule

}
