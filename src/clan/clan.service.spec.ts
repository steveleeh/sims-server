import { Test, TestingModule } from '@nestjs/testing';
import { ClanService } from './clan.service';

describe('ClanService', () => {
  let service: ClanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClanService],
    }).compile();

    service = module.get<ClanService>(ClanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
