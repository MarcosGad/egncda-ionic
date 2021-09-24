import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificateCountrySpecificHealthIssuesPage } from './certificate-country-specific-health-issues.page';

const routes: Routes = [
  {
    path: '',
    component: CertificateCountrySpecificHealthIssuesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificateCountrySpecificHealthIssuesPageRoutingModule {}
