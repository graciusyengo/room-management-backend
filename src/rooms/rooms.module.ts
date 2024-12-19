import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { RoomsController } from './rooms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';
import { TypeRoomModule } from 'src/type-room/type-room.module';

@Module({

  imports:[TypeOrmModule.forFeature([Room]),TypeRoomModule],
  controllers: [RoomsController],
  providers: [RoomsService],
})
export class RoomsModule {}
