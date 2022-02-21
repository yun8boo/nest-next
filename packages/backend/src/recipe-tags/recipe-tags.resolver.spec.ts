import { Test, TestingModule } from '@nestjs/testing';
import { RecipeTagsResolver } from './recipe-tags.resolver';

describe('RecipeTagsResolver', () => {
  let resolver: RecipeTagsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecipeTagsResolver],
    }).compile();

    resolver = module.get<RecipeTagsResolver>(RecipeTagsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
