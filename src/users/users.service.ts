import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}
  async register(createUserDto: CreateUserDto) {
    const userExist = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });

    if (userExist) throw new BadRequestException('email existe deja ');
    const user = await this.userRepository.save({
      email: createUserDto.email,
      password: await argon2.hash(createUserDto.password),
      username: createUserDto.username,
    });

    const { password, ...result } = user;
    return { ...result };
  }

  async findAll() {
    const users = await this.userRepository.find();
    users.forEach((user) => {
      delete user.password;
    });

    return users
  }

  async findOne(email: string) {
    const user= await  this.userRepository.createQueryBuilder('user')
    .where('user.email=:email',{email:email})
    .getOne()

    if(!user) throw new HttpException("user n'existe pas",HttpStatus.NOT_FOUND)
      return user
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.findOne(id)
    await this.userRepository.update(id,updateUserDto)
    return await this.findOne(id) 
  }

  async remove(id: string) {
    const user= await this.findOne(id);
   return  await this.userRepository.remove(user)
  }
}
