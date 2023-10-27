import { Test, TestingModule } from '@nestjs/testing';
import { UnidadeMedidaResolver } from './unidade-medida.resolver';
import { UnidadeMedidaService } from './unidade-medida.service';

describe('UnidadeMedidaResolver', () => {
  let resolver: UnidadeMedidaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnidadeMedidaResolver, UnidadeMedidaService],
    }).compile();

    resolver = module.get<UnidadeMedidaResolver>(UnidadeMedidaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
