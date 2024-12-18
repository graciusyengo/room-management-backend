import { PartialType } from '@nestjs/swagger';
import { CreateTypePrestataireDto } from './create-type-prestataire.dto';

export class UpdateTypePrestataireDto extends PartialType(CreateTypePrestataireDto) {}
