import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateEstoqueInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
