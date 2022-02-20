import { Test, TestingModule } from '@nestjs/testing';
import { RecipesModule } from './recipes.module';
import { RecipesResolver } from './recipes.resolver';

describe('RecipesResolver', () => {
  let resolver: RecipesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [RecipesModule]
    }).compile();

    resolver = module.get<RecipesResolver>(RecipesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
