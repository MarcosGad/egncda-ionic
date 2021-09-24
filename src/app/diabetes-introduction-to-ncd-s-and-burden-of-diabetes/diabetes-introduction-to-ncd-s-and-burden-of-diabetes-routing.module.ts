import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiabetesIntroductionToNcdSAndBurdenOfDiabetesPage } from './diabetes-introduction-to-ncd-s-and-burden-of-diabetes.page';

const routes: Routes = [
  {
    path: '',
    component: DiabetesIntroductionToNcdSAndBurdenOfDiabetesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiabetesIntroductionToNcdSAndBurdenOfDiabetesPageRoutingModule {}
