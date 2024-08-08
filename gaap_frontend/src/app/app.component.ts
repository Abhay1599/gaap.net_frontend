import { Component } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SpninnerComponent } from './layout/spninner/spninner.component';
import { CommonModule } from '@angular/common';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../core/guards/auth.guard';
import { AuthInterceptor } from '../core/interceptors/auth.interceptor';
import { AuthService } from '../core/services/auth.service';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    HeaderComponent,
    FooterComponent,
    SpninnerComponent,
    CommonModule,HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'gaap_frontend';
  loading = true;

  constructor(private router: Router) {}
  ngOnInit() {
    // setTimeout(() => {
    //   this.loading = false;
    //   if (!this.loading) {
    //     this.router.navigate(['/dashboard/home']); // Redirect to home if loading is false
    //   }
    // }, 2000);
  }
}
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthGuard,
    AuthService
  ]
}).catch(err => console.error(err));