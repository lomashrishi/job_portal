import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebComponent } from './sideb.component';

describe('SidebComponent', () => {
  let component: SidebComponent;
  let fixture: ComponentFixture<SidebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
