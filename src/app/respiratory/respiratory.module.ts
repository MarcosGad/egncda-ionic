import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespiratoryPageRoutingModule } from './respiratory-routing.module';

import { RespiratoryPage } from './respiratory.page';
import { MainPipe } from '../pipes/main-pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespiratoryPageRoutingModule,
    MainPipe
  ],
  declarations: [RespiratoryPage]
})
export class RespiratoryPageModule {}
