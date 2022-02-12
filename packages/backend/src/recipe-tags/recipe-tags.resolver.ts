import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { RecipeTag } from './models/recipe-tag.model';
import { RecipeTagsService } from './recipe-tags.service';

@Resolver(RecipeTag)
export class RecipeTagsResolver {
  constructor(private readonly recipeTagsService: RecipeTagsService) {}

  @Query((returns) => RecipeTag)
  async recipeTag(@Args('name', { type: () => String }) name: string) {
    return this.recipeTagsService.recipeTags({ name });
  }

  @Query((returns) => [RecipeTag])
  async recipeTags(@Args('name', { type: () => String }) name: string) {
    return this.recipeTagsService.recipeTags();
  }

  @Mutation((returns) => RecipeTag)
  async createRecipeTag() {
    // return this.recipeTagsService.createRecipeTag();
  }
}
