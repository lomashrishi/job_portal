import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserHomeComponent } from './Pages/user-home/user-home.component';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    UserHomeComponent,
    UserRoutingModule
  ]
})
export class UserModule { }
