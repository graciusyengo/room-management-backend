import { Test, TestingModule } from '@nestjs/testing';
import { PrestatairesService } from './prestataires.service';

describe('PrestatairesService', () => {
  let service: PrestatairesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrestatairesService],
    }).compile();

    service = module.get<PrestatairesService>(PrestatairesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
