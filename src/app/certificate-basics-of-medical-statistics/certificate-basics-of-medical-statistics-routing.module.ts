import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificateBasicsOfMedicalStatisticsPage } from './certificate-basics-of-medical-statistics.page';

const routes: Routes = [
  {
    path: '',
    component: CertificateBasicsOfMedicalStatisticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificateBasicsOfMedicalStatisticsPageRoutingModule {}
