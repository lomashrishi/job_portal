import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/footslide/footslide.component.spec.ts
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
========
import { AdminFooterComponent } from './admin-footer.component';

describe('AdminFooterComponent', () => {
  let component: AdminFooterComponent;
  let fixture: ComponentFixture<AdminFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminFooterComponent);
>>>>>>>> dafea539bbbf52364ff3d45a644cfb2d867032c4:src/app/Modules/Admin/Layouts/admin-footer/admin-footer.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
