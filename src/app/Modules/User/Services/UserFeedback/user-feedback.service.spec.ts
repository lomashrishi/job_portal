import { TestBed } from '@angular/core/testing';

import { UserFeedbackService } from './user-feedback.service';

describe('UserFeedbackService', () => {
  let service: UserFeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
