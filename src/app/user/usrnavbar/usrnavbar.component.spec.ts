import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrnavbarComponent } from './usrnavbar.component';

describe('UsrnavbarComponent', () => {
  let component: UsrnavbarComponent;
  let fixture: ComponentFixture<UsrnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsrnavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsrnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
