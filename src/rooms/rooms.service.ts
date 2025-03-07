import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';
import { Repository } from 'typeorm';
import { NOTFOUND } from 'dns';
import { TypeRoomService } from 'src/type-room/type-room.service';
import { EntreprisesService } from 'src/entreprises/entreprises.service';
import { PrestatairesService } from 'src/prestataires/prestataires.service';


@Injectable()
export class RoomsService {
  constructor(@InjectRepository(Room) private roomRepository: Repository<Room>,
private readonly typeRoomService:TypeRoomService,
private readonly entrepriseService:EntreprisesService,
private readonly prestataireService:PrestatairesService) {

  }
  async create(createRoomDto: CreateRoomDto) {

    const {typeRoomId,entrepriseId,...createRoomDtoData}= createRoomDto
    const typeRoom= await this.typeRoomService.findOne(typeRoomId)
    const entreprise= await this.entrepriseService.findOne(entrepriseId)

   const newRoom= await this.roomRepository.create({
    ...createRoomDtoData,
    typeRoom:{ id: typeRoomId },
    entreprise:{id:entrepriseId}

   })
  return  await this.roomRepository.save(newRoom)

  }

  findAll() {
    return this.roomRepository.createQueryBuilder('room')
    .leftJoinAndSelect("room.typeRoom","typeRom")
    .leftJoinAndSelect("room.entreprise","entreprise")
    .leftJoinAndSelect("room.equipements","equipement")
    .leftJoinAndSelect("room.prestataires","prestataire")
    .getMany()
  }

  async addPrestataireToRoom(prestataireId:string,roomId:string){
    const room= await this.findOne(roomId)
    console.log(room)
    const prestataire= await this.prestataireService.findOne(prestataireId)

    if(!room.prestataires.some((p)=>p.id===prestataire.id)){
      room.prestataires.push(prestataire)
    }

   return  await this.roomRepository.save(room)
  }

  async findOne(id: string) {
    const room=await this.roomRepository.createQueryBuilder("room")
    .leftJoinAndSelect("room.typeRoom","typeRoom")
    .leftJoinAndSelect("room.prestataires","prestataire")
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
