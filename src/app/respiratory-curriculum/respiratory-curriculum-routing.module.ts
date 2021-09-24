import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespiratoryCurriculumPage } from './respiratory-curriculum.page';

const routes: Routes = [
  {
    path: '',
    component: RespiratoryCurriculumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespiratoryCurriculumPageRoutingModule {}
