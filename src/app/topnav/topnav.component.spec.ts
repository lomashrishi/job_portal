import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/topnav/topnav.component.spec.ts
import { TopnavComponent } from './topnav.component';

describe('TopnavComponent', () => {
  let component: TopnavComponent;
  let fixture: ComponentFixture<TopnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopnavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopnavComponent);
========
import { AdminLoginComponent } from './admin-login.component';

describe('AdminLoginComponent', () => {
  let component: AdminLoginComponent;
  let fixture: ComponentFixture<AdminLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminLoginComponent);
>>>>>>>> dafea539bbbf52364ff3d45a644cfb2d867032c4:src/app/Modules/Admin/Pages/admin-login/admin-login.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
