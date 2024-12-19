import { Test, TestingModule } from '@nestjs/testing';
import { EntreprisesService } from './entreprises.service';

describe('EntreprisesService', () => {
  let service: EntreprisesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntreprisesService],
    }).compile();

    service = module.get<EntreprisesService>(EntreprisesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
