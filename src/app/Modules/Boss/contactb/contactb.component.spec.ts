import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactbComponent } from './contactb.component';

describe('ContactbComponent', () => {
  let component: ContactbComponent;
  let fixture: ComponentFixture<ContactbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
