import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AlimentoService } from './alimento.service';
import { Alimento } from './entities/alimento.entity';
import { CreateAlimentoInput } from './dto/create-alimento.input';
import { UpdateAlimentoInput } from './dto/update-alimento.input';

@Resolver(() => Alimento)
export class AlimentoResolver {
  constructor(private readonly alimentoService: AlimentoService) {}

  @Mutation(() => Alimento)
  async createFood(
    @Args('createAlimentoInput') createAlimentoInput: CreateAlimentoInput,
  ) {
    const alimento = this.alimentoService.create(createAlimentoInput);
    return alimento;
  }

  @Query(() => [Alimento])
  allFoods() {
    return this.alimentoService.findAll();
  }

  @Query(() => Alimento, { name: 'alimento' })
  findFoodById(@Args('id', { type: () => Int }) id: number) {
    return this.alimentoService.findOne(id);
  }

  @Mutation(() => Alimento)
  updateFood(
    @Args('updateAlimentoInput') updateAlimentoInput: UpdateAlimentoInput,
  ) {
    return this.alimentoService.update(
      updateAlimentoInput.id,
      updateAlimentoInput,
    );
  }

  @Mutation(() => Alimento)
  removeFoodById(@Args('id', { type: () => Int }) id: number) {
    return this.alimentoService.remove(id);
  }
}
