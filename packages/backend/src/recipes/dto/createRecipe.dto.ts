import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateRecipeInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => [String], { nullable: true })
  tagIds?: string[];
}
