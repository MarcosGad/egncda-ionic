import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificateMiscellaneousPage } from './certificate-miscellaneous.page';

const routes: Routes = [
  {
    path: '',
    component: CertificateMiscellaneousPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificateMiscellaneousPageRoutingModule {}
