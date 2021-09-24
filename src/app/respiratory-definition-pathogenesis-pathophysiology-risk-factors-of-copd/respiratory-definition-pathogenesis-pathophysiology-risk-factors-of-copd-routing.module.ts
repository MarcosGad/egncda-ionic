import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespiratoryDefinitionPathogenesisPathophysiologyRiskFactorsOfCopdPage } from './respiratory-definition-pathogenesis-pathophysiology-risk-factors-of-copd.page';

const routes: Routes = [
  {
    path: '',
    component: RespiratoryDefinitionPathogenesisPathophysiologyRiskFactorsOfCopdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespiratoryDefinitionPathogenesisPathophysiologyRiskFactorsOfCopdPageRoutingModule {}
