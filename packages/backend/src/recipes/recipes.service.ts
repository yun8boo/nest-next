import { Injectable } from '@nestjs/common';
import { Recipe, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class RecipesService {
  constructor(private readonly prisma: PrismaService) {}

  async recipes({
    searchValue,
    skip,
    take,
    orderBy,
  }: {
    searchValue?: string;
    skip?: number;
    take?: number;
    cursor?: Prisma.RecipeWhereUniqueInput;
    orderBy?: Prisma.RecipeOrderByWithRelationInput;
  }): Promise<Recipe[]> {
    const or: Prisma.Enumerable<Prisma.RecipeWhereInput> = searchValue
      ? {
          OR: [
            {
              title: { contains: searchValue },
            },
          ],
        }
      : {};

    return this.prisma.recipe.findMany({
      where: { ...or },
      skip,
      take,
      orderBy,
      include: {
        recipeTags: true,
      },
    });
  }
  async recipe(
    recipeWhereUniqueInput: Prisma.RecipeWhereUniqueInput,
  ): Promise<Recipe | null> {
    return this.prisma.recipe.findUnique({ where: recipeWhereUniqueInput });
  }

  async createRecipe(data: Prisma.RecipeCreateInput): Promise<Recipe> {
    return this.prisma.recipe.create({
      data,
    });
  }

  async updateRecipe(params: {
    where: Prisma.RecipeWhereUniqueInput;
    data: Prisma.RecipeUpdateInput;
  }): Promise<Recipe> {
    const { where, data } = params;
    return this.prisma.recipe.update({
      data,
      where,
    });
  }

  async deleteRecipe(where: Prisma.RecipeWhereUniqueInput): Promise<Recipe> {
    return this.prisma.recipe.delete({
      where,
    });
  }
}
