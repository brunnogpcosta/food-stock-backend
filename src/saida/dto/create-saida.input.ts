import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSaidaInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
