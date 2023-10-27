import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SaidaService } from './saida.service';
import { Saida } from './entities/saida.entity';
import { CreateSaidaInput } from './dto/create-saida.input';
import { UpdateSaidaInput } from './dto/update-saida.input';

@Resolver(() => Saida)
export class SaidaResolver {
  constructor(private readonly saidaService: SaidaService) {}

  @Mutation(() => Saida)
  createSaida(@Args('createSaidaInput') createSaidaInput: CreateSaidaInput) {
    return this.saidaService.create(createSaidaInput);
  }

  @Query(() => [Saida], { name: 'saida' })
  findAll() {
    return this.saidaService.findAll();
  }

  @Query(() => Saida, { name: 'saida' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.saidaService.findOne(id);
  }

  @Mutation(() => Saida)
  updateSaida(@Args('updateSaidaInput') updateSaidaInput: UpdateSaidaInput) {
    return this.saidaService.update(updateSaidaInput.id, updateSaidaInput);
  }

  @Mutation(() => Saida)
  removeSaida(@Args('id', { type: () => Int }) id: number) {
    return this.saidaService.remove(id);
  }
}
