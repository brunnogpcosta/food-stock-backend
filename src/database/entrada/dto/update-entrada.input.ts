import { CreateEntradaInput } from './create-entrada.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEntradaInput extends PartialType(CreateEntradaInput) {
  @Field(() => Int)
  id: number;
}
