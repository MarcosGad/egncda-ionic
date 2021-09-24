import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespiratoryDefinitionPathogenesisPathophysiologyRiskFactorsOfBronchialAsthmaPage } from './respiratory-definition-pathogenesis-pathophysiology-risk-factors-of-bronchial-asthma.page';

const routes: Routes = [
  {
    path: '',
    component: RespiratoryDefinitionPathogenesisPathophysiologyRiskFactorsOfBronchialAsthmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespiratoryDefinitionPathogenesisPathophysiologyRiskFactorsOfBronchialAsthmaPageRoutingModule {}
