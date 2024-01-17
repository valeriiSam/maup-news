import { TestBed } from '@angular/core/testing';

import { ArticlesFetcherService } from './articles-fetcher.service';

describe('ArticlesFetcherService', () => {
  let service: ArticlesFetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlesFetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
