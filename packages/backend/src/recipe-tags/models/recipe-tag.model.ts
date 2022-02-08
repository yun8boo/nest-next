import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Recipe } from 'src/recipes/models/recipe.model';

@ObjectType({ description: 'recipe-tag' })
export class RecipeTag {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field((type) => [Recipe])
  recipes?: Recipe[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
