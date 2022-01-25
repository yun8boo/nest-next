import { Field, InputType, registerEnumType } from '@nestjs/graphql';

// type SortType = 'asc' | 'desc';

@InputType()
export class RecipesOrderByInput {
  @Field((type) => SortType, { nullable: true })
  updatedAt: SortType;
}

enum SortType {
  asc = 'asc',
  desc = 'desc',
}

registerEnumType(SortType, {
  name: 'RecipesSortType',
  description: 'Properties by which recipe connections can be ordered.',
});
