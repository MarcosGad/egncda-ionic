import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiscellaneousUpdatesNewsPageRoutingModule } from './miscellaneous-updates-news-routing.module';

import { MiscellaneousUpdatesNewsPage } from './miscellaneous-updates-news.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiscellaneousUpdatesNewsPageRoutingModule,
    MainPipe
  ],
  declarations: [MiscellaneousUpdatesNewsPage]
})
export class MiscellaneousUpdatesNewsPageModule {}
