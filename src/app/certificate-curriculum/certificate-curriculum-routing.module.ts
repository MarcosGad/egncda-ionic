import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificateCurriculumPage } from './certificate-curriculum.page';

const routes: Routes = [
  {
    path: '',
    component: CertificateCurriculumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificateCurriculumPageRoutingModule {}
