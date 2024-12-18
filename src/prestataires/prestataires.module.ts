import { Module } from '@nestjs/common';
import { PrestatairesService } from './prestataires.service';
import { PrestatairesController } from './prestataires.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prestataire } from './entities/prestataire.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Prestataire])],
  controllers: [PrestatairesController],
  providers: [PrestatairesService],
  exports:[PrestatairesService]
})
export class PrestatairesModule {}
