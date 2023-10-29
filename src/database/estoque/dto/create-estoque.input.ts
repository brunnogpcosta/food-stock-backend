import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateEstoqueInput {
  @Field(() => String, { description: 'Nome do estoque' })
  nome: string;

  @Field(() => String, { description: 'data de criação' })
  createdAt: string;
}
