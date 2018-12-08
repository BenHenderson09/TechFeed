import { TestBed, inject } from '@angular/core/testing';

import { ViewpostResolverService } from './viewpost-resolver.service';

describe('ViewpostResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewpostResolverService]
    });
  });

  it('should be created', inject([ViewpostResolverService], (service: ViewpostResolverService) => {
    expect(service).toBeTruthy();
  }));
});
