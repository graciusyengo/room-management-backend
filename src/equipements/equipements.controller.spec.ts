import { Test, TestingModule } from '@nestjs/testing';
import { EquipementsController } from './equipements.controller';
import { EquipementsService } from './equipements.service';

describe('EquipementsController', () => {
  let controller: EquipementsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EquipementsController],
      providers: [EquipementsService],
    }).compile();

    controller = module.get<EquipementsController>(EquipementsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
