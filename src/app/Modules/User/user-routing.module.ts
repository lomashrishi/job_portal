import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './Pages/user-home/user-home.component';
import { UserAboutComponent } from './Pages/user-about/user-about.component';
import { UserPageNotFoundComponent } from './Pages/user-page-not-found/user-page-not-found.component';

const routes: Routes = [
//user ka home page
  {'path': '', redirectTo:'user', pathMatch:'full', title:'User-Home-Page | Kanker Recruitment Portal'},
  {'path':'user','title':'User-Home-Page | Kanker Recruitment Portal',component:UserHomeComponent},
  {'path':'about-us','title':'User-Home-Page | Kanker Recruitment Portal',component:UserAboutComponent},

  
  {'path':'**','title':'Erorr 404 | Page Not Found !..', component:UserPageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
