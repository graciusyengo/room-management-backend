import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntreprisesService } from './entreprises.service';
import { CreateEntrepriseDto } from './dto/create-entreprise.dto';
import { UpdateEntrepriseDto } from './dto/update-entreprise.dto';

@Controller('entreprises')
export class EntreprisesController {
  constructor(private readonly entreprisesService: EntreprisesService) {}

  @Post()
  create(@Body() createEntrepriseDto: CreateEntrepriseDto) {
    return this.entreprisesService.create(createEntrepriseDto);
  }

  @Get()
  findAll() {
    return this.entreprisesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entreprisesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEntrepriseDto: UpdateEntrepriseDto) {
    return this.entreprisesService.update(id, updateEntrepriseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entreprisesService.remove(id);
  }
}
