import { Test, TestingModule } from '@nestjs/testing';
import { EntreprisesController } from './entreprises.controller';
import { EntreprisesService } from './entreprises.service';

describe('EntreprisesController', () => {
  let controller: EntreprisesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntreprisesController],
      providers: [EntreprisesService],
    }).compile();

    controller = module.get<EntreprisesController>(EntreprisesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
