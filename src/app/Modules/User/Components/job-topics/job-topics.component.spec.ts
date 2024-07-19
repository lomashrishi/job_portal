import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobTopicsComponent } from './job-topics.component';

describe('JobTopicsComponent', () => {
  let component: JobTopicsComponent;
  let fixture: ComponentFixture<JobTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobTopicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
