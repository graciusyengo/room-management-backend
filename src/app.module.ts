import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomsModule } from './rooms/rooms.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from './rooms/entities/room.entity';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { TypeRoomModule } from './type-room/type-room.module';
import { TypeRoom } from './type-room/entities/type-room.entity';
import { ReservationsModule } from './reservations/reservations.module';
import { Reservation } from './reservations/entities/reservation.entity';
import { EquipementsModule } from './equipements/equipements.module';
import { PrestatairesModule } from './prestataires/prestataires.module';
import { TypePrestatairesModule } from './type-prestataires/type-prestataires.module';
import { Equipement } from './equipements/entities/equipement.entity';
import { EntreprisesModule } from './entreprises/entreprises.module';
import { Entreprise } from './entreprises/entities/entreprise.entity';
import { Prestataire } from './prestataires/entities/prestataire.entity';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'management-room',
    entities: [Room,User,TypeRoom,Reservation,Equipement,Entreprise,Prestataire],
    synchronize: true,
  }),RoomsModule, UsersModule, AuthModule, TypeRoomModule, ReservationsModule, EquipementsModule, PrestatairesModule, TypePrestatairesModule, EntreprisesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
