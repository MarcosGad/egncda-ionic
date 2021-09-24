import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespiratoryDiagnosisOfBronchialAsthmaHistoryClinicalExaminationSpirometryPageRoutingModule } from './respiratory-diagnosis-of-bronchial-asthma-history-clinical-examination-spirometry-routing.module';

import { RespiratoryDiagnosisOfBronchialAsthmaHistoryClinicalExaminationSpirometryPage } from './respiratory-diagnosis-of-bronchial-asthma-history-clinical-examination-spirometry.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespiratoryDiagnosisOfBronchialAsthmaHistoryClinicalExaminationSpirometryPageRoutingModule,
    MainPipe
  ],
  declarations: [RespiratoryDiagnosisOfBronchialAsthmaHistoryClinicalExaminationSpirometryPage]
})
export class RespiratoryDiagnosisOfBronchialAsthmaHistoryClinicalExaminationSpirometryPageModule {}
