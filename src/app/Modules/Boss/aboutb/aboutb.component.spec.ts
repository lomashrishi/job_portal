import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutbComponent } from './aboutb.component';

describe('AboutbComponent', () => {
  let component: AboutbComponent;
  let fixture: ComponentFixture<AboutbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
