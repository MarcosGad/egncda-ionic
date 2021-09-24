import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvsCurriculumPage } from './cvs-curriculum.page';

const routes: Routes = [
  {
    path: '',
    component: CvsCurriculumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvsCurriculumPageRoutingModule {}
