import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OncologyCurriculumPage } from './oncology-curriculum.page';

const routes: Routes = [
  {
    path: '',
    component: OncologyCurriculumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OncologyCurriculumPageRoutingModule {}
