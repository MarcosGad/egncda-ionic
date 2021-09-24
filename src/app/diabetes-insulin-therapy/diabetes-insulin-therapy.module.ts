import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiabetesInsulinTherapyPageRoutingModule } from './diabetes-insulin-therapy-routing.module';

import { DiabetesInsulinTherapyPage } from './diabetes-insulin-therapy.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiabetesInsulinTherapyPageRoutingModule,
    MainPipe
  ],
  declarations: [DiabetesInsulinTherapyPage]
})
export class DiabetesInsulinTherapyPageModule {}
