import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTypeRoomDto } from './dto/create-type-room.dto';
import { UpdateTypeRoomDto } from './dto/update-type-room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeRoom } from './entities/type-room.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TypeRoomService {
  constructor(@InjectRepository(TypeRoom) private readonly typeRoomRepository:Repository<TypeRoom>){

  }
  async create(createTypeRoomDto: CreateTypeRoomDto) {
    return await this.typeRoomRepository.save(createTypeRoomDto);
  }

  async findAll() {
    return await this.typeRoomRepository.find() ;
  }

  async findOne(id: string) {
    const typeRoom=await this.typeRoomRepository.createQueryBuilder("typeRoom")
    .where("typeRoom.id=:id",{id:id})
    .getOne()
    if(!typeRoom) throw new HttpException("ce type de salle n'existe pas",HttpStatus.NOT_FOUND)
      return typeRoom
  }

  async update(id: string, updateTypeRoomDto: UpdateTypeRoomDto) {
    await this.findOne(id)
     await this.typeRoomRepository.update(id,updateTypeRoomDto);
     return await this.findOne(id)
  }

  async remove(id: string) {
    const typeRoom= await this.findOne(id)

    return await this.typeRoomRepository.remove(typeRoom)
  }
}
