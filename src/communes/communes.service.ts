import { Injectable } from '@nestjs/common';
import { CreateCommuneDto } from './dto/create-commune.dto';
import { UpdateCommuneDto } from './dto/update-commune.dto';

@Injectable()
export class CommunesService {
  create(createCommuneDto: CreateCommuneDto) {
    return 'This action adds a new commune';
  }

  findAll() {
    return `This action returns all communes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commune`;
  }

  update(id: number, updateCommuneDto: UpdateCommuneDto) {
    return `This action updates a #${id} commune`;
  }

  remove(id: number) {
    return `This action removes a #${id} commune`;
  }
}
