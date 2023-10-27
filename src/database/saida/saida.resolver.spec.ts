import { Test, TestingModule } from '@nestjs/testing';
import { SaidaResolver } from './saida.resolver';
import { SaidaService } from './saida.service';

describe('SaidaResolver', () => {
  let resolver: SaidaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaidaResolver, SaidaService],
    }).compile();

    resolver = module.get<SaidaResolver>(SaidaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
