import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootslideComponent } from './footslide.component';

describe('FootslideComponent', () => {
  let component: FootslideComponent;
  let fixture: ComponentFixture<FootslideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootslideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FootslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
