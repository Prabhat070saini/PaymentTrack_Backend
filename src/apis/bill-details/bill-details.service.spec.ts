import { Test, TestingModule } from '@nestjs/testing';
import { BillDetailsService } from './bill-details.service';

describe('BillDetailsService', () => {
  let service: BillDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BillDetailsService],
    }).compile();

    service = module.get<BillDetailsService>(BillDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
