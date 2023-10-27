import { CreateAlimentoInput } from './create-alimento.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateAlimentoInput extends PartialType(CreateAlimentoInput) {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field(() => Int)
  unidadeMedidaId: number;
}
