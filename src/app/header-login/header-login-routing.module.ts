import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from '../home/home.page';
import { ProfilePage } from '../profile/profile.page';

import { HeaderLoginPage } from './header-login.page';

const routes: Routes = [
  {
    path: '',
    component: HeaderLoginPage
  },
  {
    path: 'profile',
    component: ProfilePage
  },
  {
    path: 'home',
    component: HomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderLoginPageRoutingModule { }
