import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTypePrestataireDto } from './dto/create-type-prestataire.dto';
import { UpdateTypePrestataireDto } from './dto/update-type-prestataire.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TypePrestataire } from './entities/type-prestataire.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TypePrestatairesService {

  constructor(@InjectRepository(TypePrestataire) private readonly typePrestataireRepository:Repository<TypePrestataire>){
  }
  create(createTypePrestataireDto: CreateTypePrestataireDto) {
    return this.typePrestataireRepository.save(createTypePrestataireDto)
  }

  async findAll() {
    return await this.typePrestataireRepository.find();
  }

  async  findOne(id: string) {
    const typePrestataire= await this.typePrestataireRepository.createQueryBuilder("typePrestataire")
    .where("typePrestataire.id=:id",{id:id})
    .getOne() 


    if(!typePrestataire) throw new HttpException("ce type de prestataire n'existe pas",HttpStatus.NOT_FOUND)

      return typePrestataire
  }

 async  update(id: string, updateTypePrestataireDto: UpdateTypePrestataireDto) {

  await this.findOne(id)
    await this.typePrestataireRepository.update(id,updateTypePrestataireDto)
    return await this.findOne(id)
  }

  async remove(id: string) {
     const typePrestataire=await this.findOne(id);
     return this.typePrestataireRepository.remove(typePrestataire)


  }
}
