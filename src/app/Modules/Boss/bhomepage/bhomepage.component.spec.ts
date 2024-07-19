import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhomepageComponent } from './bhomepage.component';

describe('BhomepageComponent', () => {
  let component: BhomepageComponent;
  let fixture: ComponentFixture<BhomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BhomepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
