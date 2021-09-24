import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiabetesOralHealthAndDiabetesPageRoutingModule } from './diabetes-oral-health-and-diabetes-routing.module';

import { DiabetesOralHealthAndDiabetesPage } from './diabetes-oral-health-and-diabetes.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiabetesOralHealthAndDiabetesPageRoutingModule,
    MainPipe
  ],
  declarations: [DiabetesOralHealthAndDiabetesPage]
})
export class DiabetesOralHealthAndDiabetesPageModule {}
