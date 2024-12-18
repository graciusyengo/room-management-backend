import { Test, TestingModule } from '@nestjs/testing';
import { PrestatairesController } from './prestataires.controller';
import { PrestatairesService } from './prestataires.service';

describe('PrestatairesController', () => {
  let controller: PrestatairesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrestatairesController],
      providers: [PrestatairesService],
    }).compile();

    controller = module.get<PrestatairesController>(PrestatairesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
