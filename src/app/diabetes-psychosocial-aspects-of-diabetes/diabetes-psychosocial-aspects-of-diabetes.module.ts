import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiabetesPsychosocialAspectsOfDiabetesPageRoutingModule } from './diabetes-psychosocial-aspects-of-diabetes-routing.module';

import { DiabetesPsychosocialAspectsOfDiabetesPage } from './diabetes-psychosocial-aspects-of-diabetes.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiabetesPsychosocialAspectsOfDiabetesPageRoutingModule,
    MainPipe
  ],
  declarations: [DiabetesPsychosocialAspectsOfDiabetesPage]
})
export class DiabetesPsychosocialAspectsOfDiabetesPageModule {}
