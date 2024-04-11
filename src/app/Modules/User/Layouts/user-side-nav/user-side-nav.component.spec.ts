import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSideNavComponent } from './user-side-nav.component';

describe('UserSideNavComponent', () => {
  let component: UserSideNavComponent;
  let fixture: ComponentFixture<UserSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSideNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
