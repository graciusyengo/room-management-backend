import { Test, TestingModule } from '@nestjs/testing';
import { TypePrestatairesController } from './type-prestataires.controller';
import { TypePrestatairesService } from './type-prestataires.service';

describe('TypePrestatairesController', () => {
  let controller: TypePrestatairesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypePrestatairesController],
      providers: [TypePrestatairesService],
    }).compile();

    controller = module.get<TypePrestatairesController>(TypePrestatairesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
