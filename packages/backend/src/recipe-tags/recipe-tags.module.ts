import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { RecipeTagsService } from './recipe-tags.service';

@Module({
  providers: [PrismaService, RecipeTagsService],
})
export class RecipeTagsModule {}
