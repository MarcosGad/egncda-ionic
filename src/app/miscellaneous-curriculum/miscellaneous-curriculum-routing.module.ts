import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiscellaneousCurriculumPage } from './miscellaneous-curriculum.page';

const routes: Routes = [
  {
    path: '',
    component: MiscellaneousCurriculumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiscellaneousCurriculumPageRoutingModule {}
