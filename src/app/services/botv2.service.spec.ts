import { TestBed } from '@angular/core/testing';

import { Botv2Service } from './botv2.service';

describe('Botv2Service', () => {
  let service: Botv2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Botv2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
