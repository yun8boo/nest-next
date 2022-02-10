import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModule } from 'nestjs-prisma';
import { join } from 'path';
import { RecipesModule } from './recipes/recipes.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CurrentUserModule } from './current-user/current-user.module';
import { PasswordService } from './password/password.service';
import { PostsModule } from './posts/posts.module';
import { RecipeTagsModule } from './recipe-tags/recipe-tags.module';
import { loggingMiddleware } from './logging/logging.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        middlewares: [loggingMiddleware()],
      },
    }),
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
      sortSchema: true,
    }),
    RecipesModule,
    AuthModule,
    UsersModule,
    CurrentUserModule,
    PostsModule,
    RecipeTagsModule,
  ],
  providers: [PasswordService],
})
export class AppModule {}
