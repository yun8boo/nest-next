import { Resolver, Query, Args, Mutation, Int } from '@nestjs/graphql';
import { CreateRecipeInput } from './dto/createRecipe.dto';
import { RecipesOrderByInput } from './dto/recipesOrderBy.dto';
import { UpdateRecipeInput } from './dto/updateRecipe.dto';
import { Recipe } from './models/recipe.model';
import { RecipesService } from './recipes.service';

@Resolver()
export class RecipesResolver {
  constructor(private readonly recipesService: RecipesService) {}

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
