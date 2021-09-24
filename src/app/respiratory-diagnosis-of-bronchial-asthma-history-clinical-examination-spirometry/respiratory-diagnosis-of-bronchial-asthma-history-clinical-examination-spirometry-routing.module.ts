import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespiratoryDiagnosisOfBronchialAsthmaHistoryClinicalExaminationSpirometryPage } from './respiratory-diagnosis-of-bronchial-asthma-history-clinical-examination-spirometry.page';

const routes: Routes = [
  {
    path: '',
    component: RespiratoryDiagnosisOfBronchialAsthmaHistoryClinicalExaminationSpirometryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespiratoryDiagnosisOfBronchialAsthmaHistoryClinicalExaminationSpirometryPageRoutingModule {}
