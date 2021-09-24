import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespiratoryInvestigationForDiagnosisStagingOfLungCancerPage } from './respiratory-investigation-for-diagnosis-staging-of-lung-cancer.page';

const routes: Routes = [
  {
    path: '',
    component: RespiratoryInvestigationForDiagnosisStagingOfLungCancerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespiratoryInvestigationForDiagnosisStagingOfLungCancerPageRoutingModule {}
