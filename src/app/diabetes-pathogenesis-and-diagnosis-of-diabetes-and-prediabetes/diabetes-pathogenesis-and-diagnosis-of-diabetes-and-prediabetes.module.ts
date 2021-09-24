import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiabetesPathogenesisAndDiagnosisOfDiabetesAndPrediabetesPageRoutingModule } from './diabetes-pathogenesis-and-diagnosis-of-diabetes-and-prediabetes-routing.module';

import { DiabetesPathogenesisAndDiagnosisOfDiabetesAndPrediabetesPage } from './diabetes-pathogenesis-and-diagnosis-of-diabetes-and-prediabetes.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiabetesPathogenesisAndDiagnosisOfDiabetesAndPrediabetesPageRoutingModule,
    MainPipe
  ],
  declarations: [DiabetesPathogenesisAndDiagnosisOfDiabetesAndPrediabetesPage]
})
export class DiabetesPathogenesisAndDiagnosisOfDiabetesAndPrediabetesPageModule {}
