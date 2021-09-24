import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OncologyUpdatesNewsPageRoutingModule } from './oncology-updates-news-routing.module';

import { OncologyUpdatesNewsPage } from './oncology-updates-news.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OncologyUpdatesNewsPageRoutingModule,
    MainPipe
  ],
  declarations: [OncologyUpdatesNewsPage]
})
export class OncologyUpdatesNewsPageModule {}
