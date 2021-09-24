import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificateBasicResourcesPage } from './certificate-basic-resources.page';

const routes: Routes = [
  {
    path: '',
    component: CertificateBasicResourcesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificateBasicResourcesPageRoutingModule {}
