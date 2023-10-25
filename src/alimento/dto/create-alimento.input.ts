import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAlimentoInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
