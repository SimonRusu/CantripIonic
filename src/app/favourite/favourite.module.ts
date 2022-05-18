import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavouritePageRoutingModule } from './favourite-routing.module';

import { FavouritePage } from './favourite.page';
import { CardFavouriteComponent } from '../card-favourite/card-favourite.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavouritePageRoutingModule
  ],
  declarations: [FavouritePage, CardFavouriteComponent]
})
export class FavouritePageModule {}
