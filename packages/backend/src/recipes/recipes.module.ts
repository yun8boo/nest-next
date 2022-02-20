import { Module } from '@nestjs/common';
import { RecipeTagsService } from '../recipe-tags/recipe-tags.service';
import { PrismaService } from '../../prisma/prisma.service';
import { RecipesResolver } from './recipes.resolver';
import { RecipesService } from './recipes.service';

@Module({
  providers: [
    PrismaService,
    RecipesService,
    RecipesResolver,
    RecipeTagsService,
  ],
})
export class RecipesModule {}
