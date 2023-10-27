import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EntradaService } from './entrada.service';
import { Entrada } from './entities/entrada.entity';
import { CreateEntradaInput } from './dto/create-entrada.input';
import { UpdateEntradaInput } from './dto/update-entrada.input';

@Resolver(() => Entrada)
export class EntradaResolver {
  constructor(private readonly entradaService: EntradaService) {}

  @Mutation(() => Entrada)
  createEntrada(
    @Args('createEntradaInput') createEntradaInput: CreateEntradaInput,
  ) {
    return this.entradaService.create(createEntradaInput);
  }

  @Query(() => [Entrada], { name: 'entrada' })
  findAll() {
    return this.entradaService.findAll();
  }

  @Query(() => Entrada, { name: 'entrada' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.entradaService.findOne(id);
  }

  @Mutation(() => Entrada)
  updateEntrada(
    @Args('updateEntradaInput') updateEntradaInput: UpdateEntradaInput,
  ) {
    return this.entradaService.update(
      updateEntradaInput.id,
      updateEntradaInput,
    );
  }

  @Mutation(() => Entrada)
  removeEntrada(@Args('id', { type: () => Int }) id: number) {
    return this.entradaService.remove(id);
  }
}
