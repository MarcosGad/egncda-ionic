import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiabetesSmokingAndRelatedToIncidenceOfDiabetesPage } from './diabetes-smoking-and-related-to-incidence-of-diabetes.page';

const routes: Routes = [
  {
    path: '',
    component: DiabetesSmokingAndRelatedToIncidenceOfDiabetesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiabetesSmokingAndRelatedToIncidenceOfDiabetesPageRoutingModule {}
