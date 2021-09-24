import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespiratoryDiagnosisOfOsaInterpretationOfSleepReportPage } from './respiratory-diagnosis-of-osa-interpretation-of-sleep-report.page';

const routes: Routes = [
  {
    path: '',
    component: RespiratoryDiagnosisOfOsaInterpretationOfSleepReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespiratoryDiagnosisOfOsaInterpretationOfSleepReportPageRoutingModule {}
