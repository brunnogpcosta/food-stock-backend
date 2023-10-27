import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateEstoqueInput {
  @Field(() => String, { description: 'Nome do estoque' })
  nome: string;
}
