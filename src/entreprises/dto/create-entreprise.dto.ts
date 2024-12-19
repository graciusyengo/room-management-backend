import { IsOptional, IsPhoneNumber, IsString } from 'class-validator';

export class CreateEntrepriseDto {
  @IsString()
  nom: string;

  @IsString()
  adresse: string;

  @IsString()
  email: string;

  @IsPhoneNumber()  // Validation d'un numéro de téléphone
  @IsOptional()  // Téléphone est optionnel
  telephone: string;


  @IsString()
  logo: string;

}
