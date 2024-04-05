import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetidpasswordComponent } from './forgetidpassword.component';

describe('ForgetidpasswordComponent', () => {
  let component: ForgetidpasswordComponent;
  let fixture: ComponentFixture<ForgetidpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgetidpasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForgetidpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
