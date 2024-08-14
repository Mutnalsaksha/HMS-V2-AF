import { TestBed } from '@angular/core/testing';

import { AddSrService } from './add-sr.service';

describe('AddSrService', () => {
  let service: AddSrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddSrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
