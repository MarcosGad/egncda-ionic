import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificateObesityAndNutritionPage } from './certificate-obesity-and-nutrition.page';

const routes: Routes = [
  {
    path: '',
    component: CertificateObesityAndNutritionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificateObesityAndNutritionPageRoutingModule {}
