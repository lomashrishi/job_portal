import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './Pages/admin-home/admin-home.component';
import { AdminProfileComponent } from './Pages/admin-profile/admin-profile.component';
import { AdminPageNotFoundComponent } from './Pages/admin-page-not-found/admin-page-not-found.component';

const routes: Routes = [
  {path:'',title:'Admin-Home-Page | Kanker Recruitment Portal',component:AdminHomeComponent},
  {path:'profile',title:'Admin-Profile-Page | Kanker Recruitment Portal',component:AdminProfileComponent},


  {'path':'**',title:'Erorr 404 | Admin Page Not Found !..', component:AdminPageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
