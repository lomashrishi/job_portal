import { TestBed } from '@angular/core/testing';

import { CurrentJobService } from './current-job.service';

describe('CurrentJobService', () => {
  let service: CurrentJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
