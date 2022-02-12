import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class RecipeTagsService {
  constructor(private readonly prismaService: PrismaService) {}

  async recipeTag(whereUniqueInput: Prisma.RecipeTagWhereUniqueInput) {
    return this.prismaService.recipeTag.findMany({
      where: whereUniqueInput,
    });
  }

  async recipeTags(where?: Prisma.RecipeTagWhereInput) {
    return this.prismaService.recipeTag.findMany({
      where,
    });
  }

  async createRecipeTag({ data }: { data: Prisma.RecipeTagCreateInput }) {
    return this.prismaService.recipeTag.create({
      data,
    });
  }
}
