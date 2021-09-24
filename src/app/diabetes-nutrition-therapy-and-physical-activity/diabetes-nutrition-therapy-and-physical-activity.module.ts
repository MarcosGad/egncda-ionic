import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiabetesNutritionTherapyAndPhysicalActivityPageRoutingModule } from './diabetes-nutrition-therapy-and-physical-activity-routing.module';

import { DiabetesNutritionTherapyAndPhysicalActivityPage } from './diabetes-nutrition-therapy-and-physical-activity.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiabetesNutritionTherapyAndPhysicalActivityPageRoutingModule,
    MainPipe
  ],
  declarations: [DiabetesNutritionTherapyAndPhysicalActivityPage]
})
export class DiabetesNutritionTherapyAndPhysicalActivityPageModule {}
