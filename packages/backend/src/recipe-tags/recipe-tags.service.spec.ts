import { Test, TestingModule } from '@nestjs/testing';
import { RecipeTagsService } from './recipe-tags.service';

describe('RecipeTagsService', () => {
  let service: RecipeTagsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecipeTagsService],
    }).compile();

    service = module.get<RecipeTagsService>(RecipeTagsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
