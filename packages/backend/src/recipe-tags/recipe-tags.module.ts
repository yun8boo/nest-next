import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { RecipeTagsService } from './recipe-tags.service';
import { RecipeTagsResolver } from './recipe-tags.resolver';

@Module({
  providers: [PrismaService, RecipeTagsService, RecipeTagsResolver],
})
export class RecipeTagsModule {}
