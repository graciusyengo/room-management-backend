import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as argon2 from "argon2";
import { JwtService } from '@nestjs/jwt';
import { IUser } from './types/type';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService, private readonly jwtService: JwtService) { }

    async validateUser(email: string, password: string) {
        const user = await this.userService.findOne(email)
        const passwordMatch = await argon2.verify(user.password, password)
        if (passwordMatch && user) {
            const { password, ...result } = user
            return result
        }
        throw new UnauthorizedException('mot de passe incorrect')
    }

    async login(user: IUser) {
        const { id, email } = user
        return {
            id,
            email,
            accessToken: this.jwtService.sign({ id: user.id, email: user.email })
        };
    }
}
