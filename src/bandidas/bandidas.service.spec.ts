import { Test, TestingModule } from '@nestjs/testing';
import { BandidasService } from './bandidas.service';

describe('BandidasService', () => {
  let service: BandidasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BandidasService],
    }).compile();

    service = module.get<BandidasService>(BandidasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
