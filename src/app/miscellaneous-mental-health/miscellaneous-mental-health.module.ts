import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiscellaneousMentalHealthPageRoutingModule } from './miscellaneous-mental-health-routing.module';

import { MiscellaneousMentalHealthPage } from './miscellaneous-mental-health.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiscellaneousMentalHealthPageRoutingModule,
    MainPipe
  ],
  declarations: [MiscellaneousMentalHealthPage]
})
export class MiscellaneousMentalHealthPageModule {}
