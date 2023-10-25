import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateEntradaInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
