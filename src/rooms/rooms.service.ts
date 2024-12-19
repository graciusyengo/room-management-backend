import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';
import { Repository } from 'typeorm';
import { NOTFOUND } from 'dns';
import { TypeRoomService } from 'src/type-room/type-room.service';


@Injectable()
export class RoomsService {
  constructor(@InjectRepository(Room) private roomRepository: Repository<Room>,
private readonly typeRoomService:TypeRoomService) {

  }
  async create(createRoomDto: CreateRoomDto) {

    const {typeRoomId,...createRoomDtoData}= createRoomDto


    const typeRoom= await this.typeRoomService.findOne(typeRoomId)

   const newRoom= await this.roomRepository.create({
    ...createRoomDtoData,
    typeRoom:{ id: typeRoomId }
   })


  return  await this.roomRepository.save(newRoom)

  }

  findAll() {
    return this.roomRepository.createQueryBuilder('room')
    .leftJoinAndSelect("room.typeRoom","typeRom")
    .getMany()
  }

  async findOne(id: string) {
    const room=await this.roomRepository.createQueryBuilder("room")
    .leftJoinAndSelect("room.typeRoom","typeRoom")
    .where("room.id=:id",{id:id})
    .getOne()
    if(!room) throw new HttpException("la salle n'existe pas",HttpStatus.NOT_FOUND)

      return room

    
  }

  async update(id: string, updateRoomDto: UpdateRoomDto) {
    const room = await this.roomRepository.findOne({ where: { id: id } })

    if (!room) {
      throw new NotFoundException('room ne pas trouver')
    }

    this.roomRepository.update(id, updateRoomDto)
    const updateRoom = await this.roomRepository.findOne({ where: { id: id } })
    return {
      ...updateRoom
    }
  }

  async remove(id: string) {
const room= await this.findOne(id)
    return await this.roomRepository.remove(room);
  }
}
