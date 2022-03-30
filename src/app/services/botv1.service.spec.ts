import { TestBed } from '@angular/core/testing';

import { Botv1Service } from './botv1.service';

describe('Botv1Service', () => {
  let service: Botv1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Botv1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
