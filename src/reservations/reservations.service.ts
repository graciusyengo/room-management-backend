import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReservationsService {

  constructor(@InjectRepository(Reservation) private readonly reservationRepository:Repository<Reservation>){

  }
  async create(createReservationDto: CreateReservationDto) {
    return  await this.reservationRepository.save(createReservationDto)
  }

  async findAll() {
    return await this.reservationRepository.find();
  }

  async findOne(id: string) {
    const reservation=  await this.reservationRepository.createQueryBuilder("reservation")
    .where("reservation.id=:id",{id:id})
    .getOne() 

    if(!reservation) throw new HttpException("la reservation est est introuvable",HttpStatus.NOT_FOUND)
      return reservation
  }

  async update(id: string, updateReservationDto: UpdateReservationDto) {
   await  this.findOne(id)
    await this.reservationRepository.update(id,updateReservationDto)
    return  await this.findOne(id)
  }

  async remove(id: string) {
   const reservation= await  this.findOne(id)
await this.reservationRepository.remove(reservation)
  }
}
