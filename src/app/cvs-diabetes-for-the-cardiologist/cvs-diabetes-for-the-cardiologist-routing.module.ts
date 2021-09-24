import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvsDiabetesForTheCardiologistPage } from './cvs-diabetes-for-the-cardiologist.page';

const routes: Routes = [
  {
    path: '',
    component: CvsDiabetesForTheCardiologistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvsDiabetesForTheCardiologistPageRoutingModule {}
