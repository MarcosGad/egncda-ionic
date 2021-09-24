import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QandanPageRoutingModule } from './qandan-routing.module';

import { QandanPage } from './qandan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QandanPageRoutingModule
  ],
  declarations: [QandanPage]
})
export class QandanPageModule {}
