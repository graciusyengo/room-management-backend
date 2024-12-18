import { Test, TestingModule } from '@nestjs/testing';
import { TypePrestatairesService } from './type-prestataires.service';

describe('TypePrestatairesService', () => {
  let service: TypePrestatairesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypePrestatairesService],
    }).compile();

    service = module.get<TypePrestatairesService>(TypePrestatairesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
