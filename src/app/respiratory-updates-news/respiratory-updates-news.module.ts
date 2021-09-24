import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespiratoryUpdatesNewsPageRoutingModule } from './respiratory-updates-news-routing.module';

import { RespiratoryUpdatesNewsPage } from './respiratory-updates-news.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespiratoryUpdatesNewsPageRoutingModule,
    MainPipe
  ],
  declarations: [RespiratoryUpdatesNewsPage]
})
export class RespiratoryUpdatesNewsPageModule {}
