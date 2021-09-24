import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificateBasicsOfGcpAndResearchPage } from './certificate-basics-of-gcp-and-research.page';

const routes: Routes = [
  {
    path: '',
    component: CertificateBasicsOfGcpAndResearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificateBasicsOfGcpAndResearchPageRoutingModule {}
