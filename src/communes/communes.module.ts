import { Module } from '@nestjs/common';
import { CommunesService } from './communes.service';
import { CommunesController } from './communes.controller';

@Module({
  controllers: [CommunesController],
  providers: [CommunesService],
})
export class CommunesModule {}
