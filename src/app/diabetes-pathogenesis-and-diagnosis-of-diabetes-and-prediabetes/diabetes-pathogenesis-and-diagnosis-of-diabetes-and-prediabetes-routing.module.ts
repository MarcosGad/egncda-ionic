import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiabetesPathogenesisAndDiagnosisOfDiabetesAndPrediabetesPage } from './diabetes-pathogenesis-and-diagnosis-of-diabetes-and-prediabetes.page';

const routes: Routes = [
  {
    path: '',
    component: DiabetesPathogenesisAndDiagnosisOfDiabetesAndPrediabetesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiabetesPathogenesisAndDiagnosisOfDiabetesAndPrediabetesPageRoutingModule {}
