import { Test, TestingModule } from '@nestjs/testing';
import { EstoqueResolver } from './estoque.resolver';
import { EstoqueService } from './estoque.service';

describe('EstoqueResolver', () => {
  let resolver: EstoqueResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstoqueResolver, EstoqueService],
    }).compile();

    resolver = module.get<EstoqueResolver>(EstoqueResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
