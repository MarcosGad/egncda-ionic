import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiscellaneousExamPage } from './miscellaneous-exam.page';

const routes: Routes = [
  {
    path: '',
    component: MiscellaneousExamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiscellaneousExamPageRoutingModule {}
