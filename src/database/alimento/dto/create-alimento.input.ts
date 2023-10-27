import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAlimentoInput {
  @Field(() => String, { description: 'Nome do alimento' })
  nome: string;

  @Field(() => Int, { description: 'ID da unidade de medida' })
  unidadeMedidaId: number;
}
