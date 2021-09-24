import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespiratoryManagementOfCopdStableExacerbationPage } from './respiratory-management-of-copd-stable-exacerbation.page';

const routes: Routes = [
  {
    path: '',
    component: RespiratoryManagementOfCopdStableExacerbationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespiratoryManagementOfCopdStableExacerbationPageRoutingModule {}
