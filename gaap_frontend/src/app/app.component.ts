import { Component } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SpninnerComponent } from './layout/spninner/spninner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    HeaderComponent,
    FooterComponent,
    SpninnerComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'gaap_frontend';
  loading = true;

  constructor(private router: Router) {}
  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
      if (!this.loading) {
        this.router.navigate(['/dashboard/home']); // Redirect to home if loading is false
      }
    }, 2000);
  }
}
