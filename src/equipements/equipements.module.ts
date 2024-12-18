import { Module } from '@nestjs/common';
import { EquipementsService } from './equipements.service';
import { EquipementsController } from './equipements.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Equipement } from './entities/equipement.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Equipement])],
  controllers: [EquipementsController],
  providers: [EquipementsService],
  exports:[EquipementsService]
})
export class EquipementsModule {}
