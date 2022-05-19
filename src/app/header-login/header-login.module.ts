import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderLoginPageRoutingModule } from './header-login-routing.module';

import { HeaderLoginPage } from './header-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderLoginPageRoutingModule
  ],
  declarations: [HeaderLoginPage]
})
export class HeaderLoginPageModule { }
