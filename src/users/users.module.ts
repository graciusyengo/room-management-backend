import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

import { JwtModule, JwtService } from '@nestjs/jwt';
import {ConfigModule, ConfigService} from "@nestjs/Config"
@Module({
  imports:[TypeOrmModule.forFeature([User]),JwtModule.registerAsync({
    imports:[ConfigModule],
    useFactory:(configService:ConfigService)=>({
      secret:"yengo",
      signOptions:{expiresIn:'4d'}
    }),
    inject:[ConfigService]
  })],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService]
})
export class UsersModule {}
