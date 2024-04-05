import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrfooterComponent } from './usrfooter.component';

describe('UsrfooterComponent', () => {
  let component: UsrfooterComponent;
  let fixture: ComponentFixture<UsrfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsrfooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsrfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
