import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrestatairesService } from './prestataires.service';
import { CreatePrestataireDto } from './dto/create-prestataire.dto';
import { UpdatePrestataireDto } from './dto/update-prestataire.dto';

@Controller('prestataires')
export class PrestatairesController {
  constructor(private readonly prestatairesService: PrestatairesService) {}

  @Post()
  create(@Body() createPrestataireDto: CreatePrestataireDto) {
    return this.prestatairesService.create(createPrestataireDto);
  }

  @Get()
  findAll() {
    return this.prestatairesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prestatairesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrestataireDto: UpdatePrestataireDto) {
    return this.prestatairesService.update(id, updatePrestataireDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prestatairesService.remove(id);
  }
}
