import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificateDigitalHealthPage } from './certificate-digital-health.page';

const routes: Routes = [
  {
    path: '',
    component: CertificateDigitalHealthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificateDigitalHealthPageRoutingModule {}
