import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderLoginPage } from './header-login.page';

const routes: Routes = [
  {
    path: '',
    component: HeaderLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderLoginPageRoutingModule {}
