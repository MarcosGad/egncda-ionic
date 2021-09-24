import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiabetesUpdatesNewsPageRoutingModule } from './diabetes-updates-news-routing.module';

import { DiabetesUpdatesNewsPage } from './diabetes-updates-news.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiabetesUpdatesNewsPageRoutingModule,
    MainPipe
  ],
  declarations: [DiabetesUpdatesNewsPage]
})
export class DiabetesUpdatesNewsPageModule {}
