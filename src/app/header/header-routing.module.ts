import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from '../home/home.page';
import { LoginPage } from '../login/login.page';

import { HeaderPage } from './header.page';

const routes: Routes = [
  {
    path: '',
    component: HeaderPage
  },
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'login',
    component: LoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderPageRoutingModule { }
