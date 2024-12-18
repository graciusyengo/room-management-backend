import { PartialType } from '@nestjs/swagger';
import { CreatePrestataireDto } from './create-prestataire.dto';

export class UpdatePrestataireDto extends PartialType(CreatePrestataireDto) {}
