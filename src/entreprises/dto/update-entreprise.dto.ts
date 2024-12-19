import { PartialType } from '@nestjs/swagger';
import { CreateEntrepriseDto } from './create-entreprise.dto';

export class UpdateEntrepriseDto extends PartialType(CreateEntrepriseDto) {}
