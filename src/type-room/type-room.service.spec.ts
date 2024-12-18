import { Test, TestingModule } from '@nestjs/testing';
import { TypeRoomService } from './type-room.service';

describe('TypeRoomService', () => {
  let service: TypeRoomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeRoomService],
    }).compile();

    service = module.get<TypeRoomService>(TypeRoomService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
