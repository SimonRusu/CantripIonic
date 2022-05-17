import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '/route-page/:routeId',
    /*loadChildren: () => import('./route-page').then(m => m.HomePageModule)*/
  },
  {
    path: 'header-login',
    loadChildren: () => import('./header-login/header-login.module').then(m => m.HeaderLoginPageModule)
  },
  {
    path: 'header',
    loadChildren: () => import('./header/header.module').then(m => m.HeaderPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
