import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private primengConfig: PrimeNGConfig) {}
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
