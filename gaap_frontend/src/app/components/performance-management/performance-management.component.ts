import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-performance-management',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule],
  templateUrl: './performance-management.component.html',
  styleUrls: ['./performance-management.component.scss']
})
export class PerformanceManagementComponent {}
