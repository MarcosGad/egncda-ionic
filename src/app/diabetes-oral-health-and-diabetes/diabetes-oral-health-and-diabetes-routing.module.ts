import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiabetesOralHealthAndDiabetesPage } from './diabetes-oral-health-and-diabetes.page';

const routes: Routes = [
  {
    path: '',
    component: DiabetesOralHealthAndDiabetesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiabetesOralHealthAndDiabetesPageRoutingModule {}
