import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';

export const routes: Routes = [
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    {'path':'','title':'HomePage',component:HomeComponent},
    {'path':'about-us','title':'About-Us',component:AboutusComponent }
];
