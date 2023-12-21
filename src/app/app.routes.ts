import { Routes } from '@angular/router';
import { DetailsComponent } from './home/body/detail/detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'home/:id',
    component: DetailsComponent,
  },
];
