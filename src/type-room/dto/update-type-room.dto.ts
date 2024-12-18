import { PartialType } from '@nestjs/swagger';
import { CreateTypeRoomDto } from './create-type-room.dto';

export class UpdateTypeRoomDto extends PartialType(CreateTypeRoomDto) {}
