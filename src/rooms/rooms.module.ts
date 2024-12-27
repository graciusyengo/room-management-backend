import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { RoomsController } from './rooms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';
import { TypeRoomModule } from 'src/type-room/type-room.module';
import { EntreprisesModule } from 'src/entreprises/entreprises.module';
import { PrestatairesModule } from 'src/prestataires/prestataires.module';

@Module({

  imports:[TypeOrmModule.forFeature([Room]),TypeRoomModule,EntreprisesModule,PrestatairesModule],
  controllers: [RoomsController],
  providers: [RoomsService],
  exports:[RoomsService]
})
export class RoomsModule {}
