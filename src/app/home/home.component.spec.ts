import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/home/home.component.spec.ts
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent);
========
import { AdminSideComponent } from './admin-side.component';

describe('AdminSideComponent', () => {
  let component: AdminSideComponent;
  let fixture: ComponentFixture<AdminSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminSideComponent);
>>>>>>>> dafea539bbbf52364ff3d45a644cfb2d867032c4:src/app/Modules/Admin/Layouts/admin-side/admin-side.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
