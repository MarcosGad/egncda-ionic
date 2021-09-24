import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespiratoryNormalSleepPhysiologyDefinitionRiskFactorsAndPathogenesisOfOsaPage } from './respiratory-normal-sleep-physiology-definition-risk-factors-and-pathogenesis-of-osa.page';

const routes: Routes = [
  {
    path: '',
    component: RespiratoryNormalSleepPhysiologyDefinitionRiskFactorsAndPathogenesisOfOsaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespiratoryNormalSleepPhysiologyDefinitionRiskFactorsAndPathogenesisOfOsaPageRoutingModule {}
