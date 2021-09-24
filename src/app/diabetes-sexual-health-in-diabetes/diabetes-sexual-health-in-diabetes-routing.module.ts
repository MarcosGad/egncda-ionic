import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiabetesSexualHealthInDiabetesPage } from './diabetes-sexual-health-in-diabetes.page';

const routes: Routes = [
  {
    path: '',
    component: DiabetesSexualHealthInDiabetesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiabetesSexualHealthInDiabetesPageRoutingModule {}
