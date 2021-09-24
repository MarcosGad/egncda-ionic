import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespiratoryRiskFactorsClassificationsAndClinicalManifestationsOfLungCancerPage } from './respiratory-risk-factors-classifications-and-clinical-manifestations-of-lung-cancer.page';

const routes: Routes = [
  {
    path: '',
    component: RespiratoryRiskFactorsClassificationsAndClinicalManifestationsOfLungCancerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespiratoryRiskFactorsClassificationsAndClinicalManifestationsOfLungCancerPageRoutingModule {}
