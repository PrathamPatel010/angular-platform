import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then((c) => c.DashboardComponent),
      },
      {
        path: 'masters/users',
        loadComponent: () =>
          import('./features/master/users/users.component').then((m) => m.UsersComponent),
      },
      {
        path: 'masters/products',
        loadComponent: () =>
          import('./features/master/products/products.component').then((m) => m.ProductsComponent),
      },
    ],
  },
];
