import { CreateEstoqueInput } from './create-estoque.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEstoqueInput extends PartialType(CreateEstoqueInput) {
  @Field(() => Int)
  id: number;
}
