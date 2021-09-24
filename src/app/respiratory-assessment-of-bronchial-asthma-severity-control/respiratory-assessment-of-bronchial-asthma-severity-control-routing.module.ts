import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespiratoryAssessmentOfBronchialAsthmaSeverityControlPage } from './respiratory-assessment-of-bronchial-asthma-severity-control.page';

const routes: Routes = [
  {
    path: '',
    component: RespiratoryAssessmentOfBronchialAsthmaSeverityControlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespiratoryAssessmentOfBronchialAsthmaSeverityControlPageRoutingModule {}
