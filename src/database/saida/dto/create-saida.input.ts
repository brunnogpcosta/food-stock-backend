import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSaidaInput {
  @Field(() => Int, { description: 'id da entrada' })
  entrada_id: number;

  @Field(() => Int, { description: 'estoque da entrada' })
  estoque_id: number;

  @Field(() => Int, { description: 'quantidade' })
  quantidade: number;
}
