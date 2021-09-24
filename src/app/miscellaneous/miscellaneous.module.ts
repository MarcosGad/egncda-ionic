import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiscellaneousPageRoutingModule } from './miscellaneous-routing.module';

import { MiscellaneousPage } from './miscellaneous.page';
import { MainPipe } from '../pipes/main-pipe.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiscellaneousPageRoutingModule,
    MainPipe
  ],
  declarations: [MiscellaneousPage]
})
export class MiscellaneousPageModule {}
