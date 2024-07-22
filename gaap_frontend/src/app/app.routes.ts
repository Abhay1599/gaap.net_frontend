import { Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { AboutComponent } from './dashboard/about/about.component';
import { ContactComponent } from './dashboard/contact/contact.component';
import { BusinessTransitionComponent } from './components/GResources/business-transition/business-transition.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'dashboard/home', component: HomeComponent },
  { path: 'company/about', component: AboutComponent },
  { path: 'company/contact', component: ContactComponent },
  { path: 'resources/business-transition', component: BusinessTransitionComponent },

];
