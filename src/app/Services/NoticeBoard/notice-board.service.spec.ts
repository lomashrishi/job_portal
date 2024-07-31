import { TestBed } from '@angular/core/testing';
import { NoticeBoardService } from './notice-board.service';

describe('NoticeBoardService', () => {
  let service: NoticeBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoticeBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
