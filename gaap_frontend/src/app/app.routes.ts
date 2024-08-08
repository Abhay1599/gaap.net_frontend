import { Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { AboutComponent } from './dashboard/about/about.component';
import { ContactComponent } from './dashboard/contact/contact.component';
import { BusinessTransitionComponent } from './components/GResources/business-transition/business-transition.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BlogComponent } from './components/blog/blog.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PerformanceManagementComponent } from './components/performance-management/performance-management.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard/home', component: HomeComponent },
  { path: 'company/about', component: AboutComponent },
  { path: 'company/contact', component: ContactComponent },
  {
    path: 'resources/business-transition',
    component: BusinessTransitionComponent,
  },
  {
    path: 'resources/performance-management',
    component: PerformanceManagementComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'blogs', component: BlogComponent },
  { path: '**', component: NotFoundComponent },
];
