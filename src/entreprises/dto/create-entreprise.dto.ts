import { IsString } from 'class-validator';

export class CreateEntrepriseDto {
  @IsString()
  nom: string;

  @IsString()
  adresse: string;

  @IsString()
  email: string;
}
