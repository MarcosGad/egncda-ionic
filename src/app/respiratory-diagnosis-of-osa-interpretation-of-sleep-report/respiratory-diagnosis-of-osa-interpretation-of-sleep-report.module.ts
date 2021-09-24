import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespiratoryDiagnosisOfOsaInterpretationOfSleepReportPageRoutingModule } from './respiratory-diagnosis-of-osa-interpretation-of-sleep-report-routing.module';

import { RespiratoryDiagnosisOfOsaInterpretationOfSleepReportPage } from './respiratory-diagnosis-of-osa-interpretation-of-sleep-report.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespiratoryDiagnosisOfOsaInterpretationOfSleepReportPageRoutingModule,
    MainPipe
  ],
  declarations: [RespiratoryDiagnosisOfOsaInterpretationOfSleepReportPage]
})
export class RespiratoryDiagnosisOfOsaInterpretationOfSleepReportPageModule {}
