import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificateBooksPage } from './certificate-books.page';

const routes: Routes = [
  {
    path: '',
    component: CertificateBooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificateBooksPageRoutingModule {}
