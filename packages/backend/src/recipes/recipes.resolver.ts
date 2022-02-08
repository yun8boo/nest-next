import {
  Resolver,
  Query,
  Args,
  Mutation,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { RecipeTag } from 'src/recipe-tags/models/recipe-tag.model';
import { RecipeTagsService } from 'src/recipe-tags/recipe-tags.service';
import { CreateRecipeInput } from './dto/createRecipe.dto';
import { RecipesOrderByInput } from './dto/recipesOrderBy.dto';
import { UpdateRecipeInput } from './dto/updateRecipe.dto';
import { Recipe } from './models/recipe.model';
import { RecipesService } from './recipes.service';

@Resolver(() => Recipe)
export class RecipesResolver {
  constructor(
    private readonly recipesService: RecipesService,
    private readonly recipeTagsService: RecipeTagsService,
  ) {}

  @Query(() => String)
  async test() {
    return 'hello';
  }

  @Query((returns) => Recipe)
  async recipe(@Args('id', { type: () => String }) id: string) {
    return this.recipesService.recipe({ id });
  }

  @Query((returns) => [Recipe])
  async recipes(
    @Args('searchValue', { nullable: true }) searchValue?: string,
    @Args('skip', { nullable: true, type: () => Int }) skip?: number,
    @Args('take', { nullable: true, type: () => Int }) take?: number,
    @Args('orderBy', { nullable: true }) orderBy?: RecipesOrderByInput,
  ) {
    return this.recipesService.recipes({ searchValue, skip, take, orderBy });
  }

  @ResolveField(() => [RecipeTag])
  async tags(@Parent() recipe: Recipe) {
    return this.recipeTagsService.recipeTags({
      where: {
        recipes: {
          every: {
            id: recipe.id,
          },
        },
      },
    });
  }

  @Mutation((returns) => Recipe)
  async createRecipe(
    @Args('createRecipeInput') { title, description }: CreateRecipeInput,
  ) {
    return this.recipesService.createRecipe({
      title,
      description,
    });
  }

  @Mutation((returns) => Recipe)
  async updateRecipe(
    @Args('updateRecipeInput') { id, title, description }: UpdateRecipeInput,
  ) {
    return this.recipesService.updateRecipe({
      where: { id },
      data: { title, description },
    });
  }
}
