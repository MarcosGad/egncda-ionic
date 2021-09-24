import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatesNewsPageRoutingModule } from './updates-news-routing.module';

import { UpdatesNewsPage } from './updates-news.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatesNewsPageRoutingModule,
    MainPipe
  ],
  declarations: [UpdatesNewsPage]
})
export class UpdatesNewsPageModule {}
