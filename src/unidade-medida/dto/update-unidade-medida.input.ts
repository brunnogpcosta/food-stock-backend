import { CreateUnidadeMedidaInput } from './create-unidade-medida.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUnidadeMedidaInput extends PartialType(CreateUnidadeMedidaInput) {
  @Field(() => Int)
  id: number;
}
