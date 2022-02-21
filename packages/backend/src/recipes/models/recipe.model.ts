import { Field, ID, ObjectType } from '@nestjs/graphql';
import { RecipeTag } from '../../recipe-tags/models/recipe-tag.model';

@ObjectType({ description: 'recipe' })
export class Recipe {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field((type) => [RecipeTag]!)
  tags: RecipeTag[];
}
