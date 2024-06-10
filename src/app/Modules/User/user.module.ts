import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserHomeComponent } from './Pages/user-home/user-home.component';
import { UserPageNotFoundComponent } from './Pages/user-page-not-found/user-page-not-found.component';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    UserHomeComponent,
    UserPageNotFoundComponent
  ]
})
export class UserModule { }
