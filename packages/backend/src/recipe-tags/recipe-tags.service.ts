import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class RecipeTagsService {
  constructor(private readonly prismaService: PrismaService) {}
  async recipeTags({ where }: { where: Prisma.RecipeTagWhereInput }) {
    return this.prismaService.recipeTag.findMany({
      where,
    });
  }
}
