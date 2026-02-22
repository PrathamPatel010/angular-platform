import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const masterRoutes: Routes = [
  {
    path: 'users',
    loadComponent: () =>
      import('@features/master/users/users.component').then((m) => m.UsersComponent),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('@features/master/products/products.component').then((m) => m.ProductsComponent),
  },
];

@NgModule({
  imports: [RouterModule.forChild(masterRoutes)],
  exports: [RouterModule],
})
export class MasterRoutingModule {}
