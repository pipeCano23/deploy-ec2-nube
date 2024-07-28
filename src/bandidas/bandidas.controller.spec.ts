import { Test, TestingModule } from '@nestjs/testing';
import { BandidasController } from './bandidas.controller';

describe('BandidasController', () => {
  let controller: BandidasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BandidasController],
    }).compile();

    controller = module.get<BandidasController>(BandidasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
