import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiabetesCurriculumPage } from './diabetes-curriculum.page';

const routes: Routes = [
  {
    path: '',
    component: DiabetesCurriculumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiabetesCurriculumPageRoutingModule {}
