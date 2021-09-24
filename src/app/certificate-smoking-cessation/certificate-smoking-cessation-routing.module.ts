import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificateSmokingCessationPage } from './certificate-smoking-cessation.page';

const routes: Routes = [
  {
    path: '',
    component: CertificateSmokingCessationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificateSmokingCessationPageRoutingModule {}
