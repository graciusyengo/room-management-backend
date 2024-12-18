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

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'management-room',
    entities: [Room,User],
    synchronize: true,
  }),RoomsModule, UsersModule, AuthModule, TypeRoomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
