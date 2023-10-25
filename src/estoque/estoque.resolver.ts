import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EstoqueService } from './estoque.service';
import { Estoque } from './entities/estoque.entity';
import { CreateEstoqueInput } from './dto/create-estoque.input';
import { UpdateEstoqueInput } from './dto/update-estoque.input';

@Resolver(() => Estoque)
export class EstoqueResolver {
  constructor(private readonly estoqueService: EstoqueService) {}

  @Mutation(() => Estoque)
  createEstoque(@Args('createEstoqueInput') createEstoqueInput: CreateEstoqueInput) {
    return this.estoqueService.create(createEstoqueInput);
  }

  @Query(() => [Estoque], { name: 'estoque' })
  findAll() {
    return this.estoqueService.findAll();
  }

  @Query(() => Estoque, { name: 'estoque' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.estoqueService.findOne(id);
  }

  @Mutation(() => Estoque)
  updateEstoque(@Args('updateEstoqueInput') updateEstoqueInput: UpdateEstoqueInput) {
    return this.estoqueService.update(updateEstoqueInput.id, updateEstoqueInput);
  }

  @Mutation(() => Estoque)
  removeEstoque(@Args('id', { type: () => Int }) id: number) {
    return this.estoqueService.remove(id);
  }
}
