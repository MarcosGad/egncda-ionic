import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiabetesPsychosocialAspectsOfDiabetesPage } from './diabetes-psychosocial-aspects-of-diabetes.page';

const routes: Routes = [
  {
    path: '',
    component: DiabetesPsychosocialAspectsOfDiabetesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiabetesPsychosocialAspectsOfDiabetesPageRoutingModule {}
