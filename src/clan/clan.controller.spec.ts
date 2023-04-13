import { Test, TestingModule } from '@nestjs/testing';
import { ClanController } from './clan.controller';

describe('ClanController', () => {
  let controller: ClanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClanController],
    }).compile();

    controller = module.get<ClanController>(ClanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
