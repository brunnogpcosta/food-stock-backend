import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EstoqueService } from './estoque.service';
import { Estoque } from './entities/estoque.entity';
import { CreateEstoqueInput } from './dto/create-estoque.input';
import { UpdateEstoqueInput } from './dto/update-estoque.input';

@Resolver(() => Estoque)
export class EstoqueResolver {
  constructor(private readonly estoqueService: EstoqueService) {}

  @Mutation(() => Estoque)
  async createEstoque(
    @Args('createEstoqueInput') createEstoqueInput: CreateEstoqueInput,
  ) {
    const estoque = this.estoqueService.create(createEstoqueInput);
    return estoque;
  }

  @Query(() => [Estoque])
  allStocks() {
    return this.estoqueService.findAll();
  }

  @Query(() => Estoque, { name: 'estoque' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.estoqueService.findOne(id);
  }

  @Mutation(() => Estoque)
  updateEstoque(
    @Args('updateEstoqueInput') updateEstoqueInput: UpdateEstoqueInput,
  ) {
    return this.estoqueService.update(
      updateEstoqueInput.id,
      updateEstoqueInput,
    );
  }

  @Mutation(() => Estoque)
  removeEstoque(@Args('id', { type: () => Int }) id: number) {
    return this.estoqueService.remove(id);
  }
}
