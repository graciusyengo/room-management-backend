import { Module } from '@nestjs/common';
import { TypeRoomService } from './type-room.service';
import { TypeRoomController } from './type-room.controller';

@Module({
  controllers: [TypeRoomController],
  providers: [TypeRoomService],
})
export class TypeRoomModule {}
