import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoutePageRoutingModule } from './route-routing.module';

import { RoutePage } from './route.page';
import { TimetableComponent } from '../timetable/timetable.component';
import { RouteSettingsComponent } from '../route-settings/route-settings.component';
import { MapComponent } from '../map/map.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoutePageRoutingModule
  ],
  declarations: [RoutePage, TimetableComponent, RouteSettingsComponent, MapComponent]
})
export class RoutePageModule {}
