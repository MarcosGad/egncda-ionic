import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespiratoryTttOfOsaMedicalAndSurgicalPageRoutingModule } from './respiratory-ttt-of-osa-medical-and-surgical-routing.module';

import { RespiratoryTttOfOsaMedicalAndSurgicalPage } from './respiratory-ttt-of-osa-medical-and-surgical.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespiratoryTttOfOsaMedicalAndSurgicalPageRoutingModule,
    MainPipe
  ],
  declarations: [RespiratoryTttOfOsaMedicalAndSurgicalPage]
})
export class RespiratoryTttOfOsaMedicalAndSurgicalPageModule {}
