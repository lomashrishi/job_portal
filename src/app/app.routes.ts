import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutusComponent } from './Pages/aboutus/aboutus.component';
import { ContactusComponent } from './Pages/contactus/contactus.component';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';
import { ForgetComponent } from './Pages/forget/forget.component';
import { NotificationsComponent } from './Pages/notifications/notifications.component';
import { GalleryComponent } from './Pages/gallery/gallery.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { AdminHomeComponent } from './Modules/Admin/Pages/admin-home/admin-home.component';
import { AdminProfileComponent } from './Modules/Admin/Pages/admin-profile/admin-profile.component';
import { AdminPageNotFoundComponent } from './Modules/Admin/Pages/admin-page-not-found/admin-page-not-found.component';
import { ForgetidpasswordComponent } from './Pages/forget/forgetidpassword/forgetidpassword.component';


export const routes: Routes = [
    // Public pages
    {'path': 'home', redirectTo:'', pathMatch:'full'},
    {'path':'','title':'Home-Page | Kanker Recruitment Portal',component:HomeComponent},
    {'path': 'about', redirectTo: 'about-us', pathMatch: 'full' },
    {'path':'about-us','title':'About-Us | Kanker Recruitment Portal',component:AboutusComponent },
    {'path': 'contact', redirectTo: 'contact-us', pathMatch: 'full' },
    {'path':'contact-us','title':'Contact-Us | Kanker Recruitment Portal',component:ContactusComponent},
    {'path':'register','title':'User-Registration | Kanker Recruitment Portal',component:RegisterComponent},
    {'path':'login','title':'User-Login | Kanker Recruitment Portal', component:LoginComponent},
    {'path': 'forgot', redirectTo: 'ForgotPassword', pathMatch: 'full' },
    {'path': 'forgotpassword', redirectTo: 'ForgotPassword', pathMatch: 'full' },
    {'path':'ForgotPassword','title':'Forgot User ID & Password | Kanker Recruitment Portal', component:ForgetComponent},
    {'path':'notification',redirectTo:'notifications',pathMatch:'full'},
    {'path':'notifications','title':'Recruitment Notifications | Kanker Recruitment Portal', component:NotificationsComponent},
    {'path':'gallery','title':'Gallery | Kanker Recruitment Portal', component:GalleryComponent},

    //Lazy Routing For User Module
    // {'path':'user',  loadChildren:()=>import('./Modules/User/user.module').then(mod=> mod.UserModule)},    









    //Lazy Routing For Admin Module
    // {'path':'admin',  loadChildren:()=>import('./Modules/Admin/admin.module').then(mod=> mod.AdminModule)},  

    {'path':'adm',title:'Admin-Home-Page | Kanker Recruitment Portal',component:AdminHomeComponent},
 
    { 'path':'adm',
      children:[  
        {'path':'profile',title:'Admin-Profile-Page | Kanker Recruitment Portal',component:AdminProfileComponent},
        {'path' : 'ab','title':'abt', component: ContactusComponent },

        {'path':'**',title:'Erorr 404 | Admin Page Not Found !..', component:AdminPageNotFoundComponent}
  
        ]
    },
  







  
// This is For 404 Page  Error Handling
    { 'path': '**','title':'Erorr 404 | Page Not Found !..', component:PageNotFoundComponent}

];
