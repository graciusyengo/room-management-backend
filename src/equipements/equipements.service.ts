import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEquipementDto } from './dto/create-equipement.dto';
import { UpdateEquipementDto } from './dto/update-equipement.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Equipement } from './entities/equipement.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EquipementsService {

  constructor(@InjectRepository(Equipement) private readonly equipementRepository:Repository<Equipement>){
  }
  async create(createEquipementDto: CreateEquipementDto) {
    return await this.equipementRepository.save(createEquipementDto)
  }

  findAll() {
    return this.equipementRepository.find()
  }

  async findOne(id: string) {
    const equipement= this.equipementRepository.createQueryBuilder("equipement")
    .where("equipement.id=:id",{id:id})
    .getOne()

    if(!equipement) throw new HttpException("l'equipement introuvable",HttpStatus.NOT_FOUND)
      return equipement
  }

  async update(id: string, updateEquipementDto: UpdateEquipementDto) {
     await this.findOne(id)
    await this.equipementRepository.update(id,updateEquipementDto)
    return this.findOne(id)
  }

  async remove(id: string) {
    const equipement =await this.findOne(id)
    return  await this.equipementRepository.remove(equipement)
  }
}
