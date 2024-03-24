import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowgalleryComponent } from './showgallery.component';

describe('ShowgalleryComponent', () => {
  let component: ShowgalleryComponent;
  let fixture: ComponentFixture<ShowgalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowgalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
