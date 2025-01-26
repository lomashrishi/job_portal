import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentOpningsComponent } from './current-opnings.component';

describe('CurrentOpningsComponent', () => {
  let component: CurrentOpningsComponent;
  let fixture: ComponentFixture<CurrentOpningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentOpningsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentOpningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
