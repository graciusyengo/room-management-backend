import { PartialType } from '@nestjs/swagger';
import { CreateEquipementDto } from './create-equipement.dto';

export class UpdateEquipementDto extends PartialType(CreateEquipementDto) {}
