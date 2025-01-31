import { PartialType } from '@nestjs/swagger';
import { CreateCommuneDto } from './create-commune.dto';

export class UpdateCommuneDto extends PartialType(CreateCommuneDto) {}
