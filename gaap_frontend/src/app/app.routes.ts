import { Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { AboutComponent } from './dashboard/about/about.component';
import { ContactComponent } from './dashboard/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'dashboard/home', component: HomeComponent },
  { path: 'dashboard/about', component: AboutComponent },
  { path: 'dashboard/contact', component: ContactComponent },
];
