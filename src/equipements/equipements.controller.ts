import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EquipementsService } from './equipements.service';
import { CreateEquipementDto } from './dto/create-equipement.dto';
import { UpdateEquipementDto } from './dto/update-equipement.dto';

@Controller('equipements')
export class EquipementsController {
  constructor(private readonly equipementsService: EquipementsService) {}

  @Post()
  create(@Body() createEquipementDto: CreateEquipementDto) {
    return this.equipementsService.create(createEquipementDto);
  }

  @Get()
  findAll() {
    return this.equipementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.equipementsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEquipementDto: UpdateEquipementDto) {
    return this.equipementsService.update(id, updateEquipementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equipementsService.remove(id);
  }
}
