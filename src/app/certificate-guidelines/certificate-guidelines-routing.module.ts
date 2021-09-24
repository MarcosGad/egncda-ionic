import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificateGuidelinesPage } from './certificate-guidelines.page';

const routes: Routes = [
  {
    path: '',
    component: CertificateGuidelinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificateGuidelinesPageRoutingModule {}
