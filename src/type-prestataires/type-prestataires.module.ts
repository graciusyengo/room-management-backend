import { Module } from '@nestjs/common';
import { TypePrestatairesService } from './type-prestataires.service';
import { TypePrestatairesController } from './type-prestataires.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypePrestataire } from './entities/type-prestataire.entity';

@Module({

  imports:[TypeOrmModule.forFeature([TypePrestataire])],
  controllers: [TypePrestatairesController],
  providers: [TypePrestatairesService],
  exports:[TypePrestatairesService]
})
export class TypePrestatairesModule {}
