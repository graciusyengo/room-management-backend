import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypePrestatairesService } from './type-prestataires.service';
import { CreateTypePrestataireDto } from './dto/create-type-prestataire.dto';
import { UpdateTypePrestataireDto } from './dto/update-type-prestataire.dto';

@Controller('type-prestataires')
export class TypePrestatairesController {
  constructor(private readonly typePrestatairesService: TypePrestatairesService) {}

  @Post()
  create(@Body() createTypePrestataireDto: CreateTypePrestataireDto) {
    return this.typePrestatairesService.create(createTypePrestataireDto);
  }

  @Get()
  findAll() {
    return this.typePrestatairesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typePrestatairesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypePrestataireDto: UpdateTypePrestataireDto) {
    return this.typePrestatairesService.update(id, updateTypePrestataireDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typePrestatairesService.remove(id);
  }
}
