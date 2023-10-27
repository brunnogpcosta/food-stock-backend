import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUnidadeMedidaInput {
  @Field(() => String, { description: 'Nome da medida' })
  nome: string;
}
