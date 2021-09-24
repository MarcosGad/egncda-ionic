import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificateClinicalScenariosPage } from './certificate-clinical-scenarios.page';

const routes: Routes = [
  {
    path: '',
    component: CertificateClinicalScenariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificateClinicalScenariosPageRoutingModule {}
