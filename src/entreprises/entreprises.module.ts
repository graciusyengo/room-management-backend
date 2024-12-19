import { Module } from '@nestjs/common';
import { EntreprisesService } from './entreprises.service';
import { EntreprisesController } from './entreprises.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entreprise } from './entities/entreprise.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Entreprise])],
  controllers: [EntreprisesController],
  providers: [EntreprisesService],
  exports:[EntreprisesService]
})
export class EntreprisesModule {}
