import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvsRiskAssessmentInHypertensionPage } from './cvs-risk-assessment-in-hypertension.page';

const routes: Routes = [
  {
    path: '',
    component: CvsRiskAssessmentInHypertensionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvsRiskAssessmentInHypertensionPageRoutingModule {}
