import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { ClientGuard } from './guards/author.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

 @UseGuards(LocalAuthGuard,ClientGuard)
  @Post('/login')
  async login(@Request() req) {
    console.log("User in request:", req.user); // Vérifiez si l'utilisateur est bien authentifié
    return await this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
