import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategie';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import {ConfigModule, ConfigService} from "@nestjs/Config"
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports:[UsersModule, PassportModule,JwtModule.registerAsync({
    imports:[ConfigModule],
    useFactory:(configService:ConfigService)=>({
      secret:"yengo",
      signOptions:{expiresIn:'4d'}
    }),
    inject:[ConfigService]
  })],
  providers: [AuthService,LocalStrategy,JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
