import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiabetesExamPage } from './diabetes-exam.page';

const routes: Routes = [
  {
    path: '',
    component: DiabetesExamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiabetesExamPageRoutingModule {}
