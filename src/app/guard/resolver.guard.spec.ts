import { TestBed, async, inject } from '@angular/core/testing';

import { ResolverGuard } from './resolver.guard';

describe('ResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolverGuard]
    });
  });

  it('should ...', inject([ResolverGuard], (guard: ResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
