import { Test, TestingModule } from '@nestjs/testing';
import { RecipesModule } from './recipes.module';
import { RecipesService } from './recipes.service';

describe('RecipesService', () => {
  let recipeService: RecipesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [RecipesModule],
    }).compile();

    recipeService = module.get<RecipesService>(RecipesService);
  });

  it('should be defined', () => {
    expect(recipeService).toBeDefined();
  });
});
