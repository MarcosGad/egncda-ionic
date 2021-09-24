import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificateMentalHealthPage } from './certificate-mental-health.page';

const routes: Routes = [
  {
    path: '',
    component: CertificateMentalHealthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificateMentalHealthPageRoutingModule {}
