import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UnidadeMedidaService } from './unidade-medida.service';
import { UnidadeMedida } from './entities/unidade-medida.entity';
import { CreateUnidadeMedidaInput } from './dto/create-unidade-medida.input';
import { UpdateUnidadeMedidaInput } from './dto/update-unidade-medida.input';

@Resolver(() => UnidadeMedida)
export class UnidadeMedidaResolver {
  constructor(private readonly unidadeMedidaService: UnidadeMedidaService) {}

  @Mutation(() => UnidadeMedida)
  createUnidadeMedida(
    @Args('createUnidadeMedidaInput')
    createUnidadeMedidaInput: CreateUnidadeMedidaInput,
  ) {
    return this.unidadeMedidaService.create(createUnidadeMedidaInput);
  }

  @Query(() => [UnidadeMedida])
  allUnities() {
    return this.unidadeMedidaService.findAll();
  }

  @Query(() => UnidadeMedida, { name: 'unidadeMedida' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.unidadeMedidaService.findOne(id);
  }

  @Mutation(() => UnidadeMedida)
  updateUnidadeMedida(
    @Args('updateUnidadeMedidaInput')
    updateUnidadeMedidaInput: UpdateUnidadeMedidaInput,
  ) {
    return this.unidadeMedidaService.update(
      updateUnidadeMedidaInput.id,
      updateUnidadeMedidaInput,
    );
  }

  @Mutation(() => UnidadeMedida)
  removeUnidadeMedida(@Args('id', { type: () => Int }) id: number) {
    return this.unidadeMedidaService.remove(id);
  }
}
