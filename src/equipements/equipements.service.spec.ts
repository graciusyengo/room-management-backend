import { Test, TestingModule } from '@nestjs/testing';
import { EquipementsService } from './equipements.service';

describe('EquipementsService', () => {
  let service: EquipementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EquipementsService],
    }).compile();

    service = module.get<EquipementsService>(EquipementsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
