import { Test, TestingModule } from '@nestjs/testing';
import { EntradaResolver } from './entrada.resolver';
import { EntradaService } from './entrada.service';

describe('EntradaResolver', () => {
  let resolver: EntradaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntradaResolver, EntradaService],
    }).compile();

    resolver = module.get<EntradaResolver>(EntradaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
