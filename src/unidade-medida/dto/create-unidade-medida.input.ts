import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUnidadeMedidaInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
