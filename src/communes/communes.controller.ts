import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommunesService } from './communes.service';
import { CreateCommuneDto } from './dto/create-commune.dto';
import { UpdateCommuneDto } from './dto/update-commune.dto';

@Controller('communes')
export class CommunesController {
  constructor(private readonly communesService: CommunesService) {}

  @Post()
  create(@Body() createCommuneDto: CreateCommuneDto) {
    return this.communesService.create(createCommuneDto);
  }

  @Get()
  findAll() {
    return this.communesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.communesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommuneDto: UpdateCommuneDto) {
    return this.communesService.update(+id, updateCommuneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.communesService.remove(+id);
  }
}
