import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespiratoryExamPage } from './respiratory-exam.page';

const routes: Routes = [
  {
    path: '',
    component: RespiratoryExamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespiratoryExamPageRoutingModule {}
