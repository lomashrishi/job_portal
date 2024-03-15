import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { NotificationsComponent } from './notifications/notifications.component';

export const routes: Routes = [
    {'path': 'home', redirectTo: '', pathMatch: 'full' },
    {'path':'','title':'Home-Page | Kanker Recruitment Portal',component:HomeComponent},
    {'path': 'about', redirectTo: 'about-us', pathMatch: 'full' },
    {'path':'about-us','title':'About-Us | Kanker Recruitment Portal',component:AboutusComponent },
    {'path': 'contact', redirectTo: 'contact-us', pathMatch: 'full' },
    {'path':'contact-us','title':'Contact-Us | Kanker Recruitment Portal',component:ContactusComponent},
    {'path':'register','title':'User-Registration | Kanker Recruitment Portal',component:RegisterComponent},
    {'path':'login','title':'User-Login | Kanker Recruitment Portal', component:LoginComponent},
    {'path': 'forget', redirectTo: 'ForgetPassword', pathMatch: 'full' },
    {'path': 'forgetpassword', redirectTo: 'ForgetPassword', pathMatch: 'full' },
    {'path':'ForgetPassword','title':'Forget User ID & Password | Kanker Recruitment Portal', component:ForgetComponent},
    {'path':'notification',redirectTo:'notifications',pathMatch:'full'},
    {'path':'notifications','title':'Recruitment Notifications | Kanker Recruitment Portal', component:NotificationsComponent}



];
