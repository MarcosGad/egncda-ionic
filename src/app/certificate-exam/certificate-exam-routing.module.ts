import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificateExamPage } from './certificate-exam.page';

const routes: Routes = [
  {
    path: '',
    component: CertificateExamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificateExamPageRoutingModule {}
