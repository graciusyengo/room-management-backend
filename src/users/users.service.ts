import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as argon2 from "argon2";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private readonly userRepository:Repository<User>, private readonly jwtService:JwtService){}
  async register(createUserDto: CreateUserDto) {
    
    const userExist= await this.userRepository.findOne({where:{email:createUserDto.email}})

    if(userExist) throw new BadRequestException('email existe deja ')
      const user = await this.userRepository.save({
        email:createUserDto.email,
        password:  await argon2.hash(createUserDto.password),
        username:createUserDto.username
      })

 const {password,...result}=user
      return {...result}
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(email: string) {
    return this.userRepository.findOne({where:{email}});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
