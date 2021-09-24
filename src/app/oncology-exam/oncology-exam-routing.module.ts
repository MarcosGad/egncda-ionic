import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OncologyExamPage } from './oncology-exam.page';

const routes: Routes = [
  {
    path: '',
    component: OncologyExamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OncologyExamPageRoutingModule {}
