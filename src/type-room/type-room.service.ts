import { Injectable } from '@nestjs/common';
import { CreateTypeRoomDto } from './dto/create-type-room.dto';
import { UpdateTypeRoomDto } from './dto/update-type-room.dto';

@Injectable()
export class TypeRoomService {
  create(createTypeRoomDto: CreateTypeRoomDto) {
    return 'This action adds a new typeRoom';
  }

  findAll() {
    return `This action returns all typeRoom`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeRoom`;
  }

  update(id: number, updateTypeRoomDto: UpdateTypeRoomDto) {
    return `This action updates a #${id} typeRoom`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeRoom`;
  }
}
