import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/info/info.component.spec.ts
import { InfoComponent } from './info.component';

describe('InfoComponent', () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoComponent);
========
import { AdminNavComponent } from './admin-nav.component';

describe('AdminNavComponent', () => {
  let component: AdminNavComponent;
  let fixture: ComponentFixture<AdminNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminNavComponent);
>>>>>>>> dafea539bbbf52364ff3d45a644cfb2d867032c4:src/app/Modules/Admin/Layouts/admin-nav/admin-nav.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
