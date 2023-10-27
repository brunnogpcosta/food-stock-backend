import { CreateEstoqueInput } from './create-estoque.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateEstoqueInput extends PartialType(CreateEstoqueInput) {
  @Field(() => ID)
  id: number;

  @Field(() => String, { description: 'Nome do estoque' })
  nome: string;
}
