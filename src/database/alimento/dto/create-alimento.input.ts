import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateAlimentoInput {
  @Field(() => String, { description: 'Nome do alimento' })
  nome: string;

  @Field(() => ID, { description: 'ID da unidade de medida' })
  unidadeMedidaId: number;
}
