import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from './home/body/body.component';
import { HeaderComponent } from './home/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-header></app-header>
    <app-body></app-body>
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, HeaderComponent, BodyComponent],
})
export class AppComponent {}
