import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEntrepriseDto } from './dto/create-entreprise.dto';
import { UpdateEntrepriseDto } from './dto/update-entreprise.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Entreprise } from './entities/entreprise.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EntreprisesService {

  constructor(@InjectRepository(Entreprise) private readonly entrepriseRepository:Repository<Entreprise>){}
  async create(createEntrepriseDto: CreateEntrepriseDto) {
    return  await this.entrepriseRepository.save(createEntrepriseDto)
  }

  findAll() {
    return this.entrepriseRepository.find({relations:['rooms']});
  }

  async findOne(id: String) {
    const entreprise= this.entrepriseRepository.createQueryBuilder("entreprise")
    .where("entreprise.id=:id",{id:id})
    .getOne()

    if(!entreprise) throw new HttpException("l'entreprise n'existe pas",HttpStatus.NOT_FOUND)
      return entreprise
  }

  async update(id: string, updateEntrepriseDto: UpdateEntrepriseDto) {

    await this.findOne(id)
    await   this.entrepriseRepository.update(id,updateEntrepriseDto)

    return this.findOne(id)
  }

  async remove(id:string) {

    const  entreprise= await this.findOne(id)
   return  await this.entrepriseRepository.remove(entreprise)
  }
}
