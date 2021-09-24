import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespiratoryBurdenOfOsaOnDifferentBodySystemBrainHeartDiabetesRespiratoryPage } from './respiratory-burden-of-osa-on-different-body-system-brain-heart-diabetes-respiratory.page';

const routes: Routes = [
  {
    path: '',
    component: RespiratoryBurdenOfOsaOnDifferentBodySystemBrainHeartDiabetesRespiratoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespiratoryBurdenOfOsaOnDifferentBodySystemBrainHeartDiabetesRespiratoryPageRoutingModule {}
