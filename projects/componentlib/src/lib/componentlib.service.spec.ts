import { TestBed } from '@angular/core/testing';

import { ComponentlibService } from './componentlib.service';

describe('ComponentlibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentlibService = TestBed.get(ComponentlibService);
    expect(service).toBeTruthy();
  });
});
