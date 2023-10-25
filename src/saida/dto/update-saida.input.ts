import { CreateSaidaInput } from './create-saida.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSaidaInput extends PartialType(CreateSaidaInput) {
  @Field(() => Int)
  id: number;
}
