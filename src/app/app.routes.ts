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
import { UserProfileComponent } from './Modules/User/Pages/user-profile/user-profile.component';
import { UserDashComponent } from './Modules/User/Pages/user-dash/user-dash.component';
import { AuthGuard } from './Guard/auth.guard';
import { UserFeedbackComponent } from './Modules/User/Pages/user-feedback/user-feedback.component';
import { UserDownloadsComponent } from './Modules/User/Pages/user-downloads/user-downloads.component';
import { UserNotificationsComponent } from './Modules/User/Pages/user-notifications/user-notifications.component';
import { UserChangePasswordComponent } from './Modules/User/Pages/user-change-password/user-change-password.component';
import { CurrentOpningsComponent } from './Modules/User/Pages/current-opnings/current-opnings.component';
import { UserSettingsComponent } from './Modules/User/Pages/user-settings/user-settings.component';
import { AdminHomeComponent } from './Modules/Admin/Pages/admin-home/admin-home.component';
import { AdminLoginComponent } from './Modules/Admin/Pages/admin-login/admin-login.component';


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

    // User All Routes 
    {'path':'user-dashboard','title':'User Dashboard Page | Kanker Recruitment Portal',component:UserDashComponent,canActivate: [AuthGuard]},
    {'path':'user-profile','title':'User Profile Page | Kanker Recruitment Portal',component:UserProfileComponent,canActivate: [AuthGuard]},
    {'path':'user-settings','title':'User Settings Page | Kanker Recruitment Portal',component:UserSettingsComponent,canActivate: [AuthGuard]},
    {'path':'user-feedback','title':'User-Feedback-Page | Kanker Recruitment Portal',component:UserFeedbackComponent,canActivate: [AuthGuard]},
    {'path':'user-downloads','title':'User Downloads Page | Kanker Recruitment Portal',component:UserDownloadsComponent,canActivate: [AuthGuard]},
    {'path':'user-notification','title':'User Notification Page | Kanker Recruitment Portal',component:UserNotificationsComponent,canActivate: [AuthGuard]},
    {'path':'user-change-password','title':'User Change Password Page | Kanker Recruitment Portal',component:UserChangePasswordComponent,canActivate: [AuthGuard]},
    {'path':'current-opnings','title':'User-Current Opnings Page | Kanker Recruitment Portal',component:CurrentOpningsComponent,canActivate: [AuthGuard]},
    
    
    // Admin
    {'path':'admin-login','title':'Admin-Login-Page | Kanker Recruitment Portal',component:AdminLoginComponent},
    {'path':'admin-dashboard','title':'Admin-Dashboard-Page | Kanker Recruitment Portal',component:AdminHomeComponent},
    



  
// This is For 404 Page  Error Handling
    { 'path': '**','title':'Erorr 404 | Page Not Found !..', component:PageNotFoundComponent}

];
