import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificateUpdatesNewsPage } from './certificate-updates-news.page';

const routes: Routes = [
  {
    path: '',
    component: CertificateUpdatesNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificateUpdatesNewsPageRoutingModule {}
