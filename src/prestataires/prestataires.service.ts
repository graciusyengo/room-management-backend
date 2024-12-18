import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePrestataireDto } from './dto/create-prestataire.dto';
import { UpdatePrestataireDto } from './dto/update-prestataire.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Prestataire } from './entities/prestataire.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PrestatairesService {

  constructor(@InjectRepository(Prestataire)private readonly prestataireRepository:Repository<Prestataire>){

  }
 async  create(createPrestataireDto: CreatePrestataireDto) {
    return this.prestataireRepository.save(createPrestataireDto)
  }

  async findAll() {
    return  await  this.prestataireRepository.find()
  }

  findOne(id: string) {
    const prestataire= this.prestataireRepository.createQueryBuilder("prestataire")
    .where("prestataire.id=:id",{id:id})
    .getOne()

    if(!Prestataire) throw new HttpException("le prestataire n'existe pas",HttpStatus.NOT_FOUND)

      return prestataire
  }

  async update(id: string, updatePrestataireDto: UpdatePrestataireDto) {
    await this.findOne(id)
    await this.prestataireRepository.update(id,updatePrestataireDto)
    return await this.findOne(id)
  }

  async remove(id: string) {
    const prestataire=await this.findOne(id)
    return await  this.prestataireRepository.remove(prestataire);
  }
}
