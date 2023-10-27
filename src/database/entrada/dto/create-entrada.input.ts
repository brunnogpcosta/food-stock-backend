import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateEntradaInput {
  @Field(() => Int, { description: 'id da entrada' })
  alimento_id: number;

  @Field(() => Int, { description: 'estoque da entrada' })
  estoque_id: number;

  @Field(() => Int, { description: 'validade' })
  validade: number;

  @Field(() => Int, { description: 'quantidade' })
  quantidade: number;
}
