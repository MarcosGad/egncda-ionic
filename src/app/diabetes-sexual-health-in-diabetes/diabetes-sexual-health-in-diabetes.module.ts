import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiabetesSexualHealthInDiabetesPageRoutingModule } from './diabetes-sexual-health-in-diabetes-routing.module';

import { DiabetesSexualHealthInDiabetesPage } from './diabetes-sexual-health-in-diabetes.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiabetesSexualHealthInDiabetesPageRoutingModule,
    MainPipe
  ],
  declarations: [DiabetesSexualHealthInDiabetesPage]
})
export class DiabetesSexualHealthInDiabetesPageModule {}
