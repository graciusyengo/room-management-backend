import { Test, TestingModule } from '@nestjs/testing';
import { TypeRoomController } from './type-room.controller';
import { TypeRoomService } from './type-room.service';

describe('TypeRoomController', () => {
  let controller: TypeRoomController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeRoomController],
      providers: [TypeRoomService],
    }).compile();

    controller = module.get<TypeRoomController>(TypeRoomController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
