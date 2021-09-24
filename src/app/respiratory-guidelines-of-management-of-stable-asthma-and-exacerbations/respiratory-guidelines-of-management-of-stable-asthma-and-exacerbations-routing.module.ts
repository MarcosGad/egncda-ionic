import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespiratoryGuidelinesOfManagementOfStableAsthmaAndExacerbationsPage } from './respiratory-guidelines-of-management-of-stable-asthma-and-exacerbations.page';

const routes: Routes = [
  {
    path: '',
    component: RespiratoryGuidelinesOfManagementOfStableAsthmaAndExacerbationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespiratoryGuidelinesOfManagementOfStableAsthmaAndExacerbationsPageRoutingModule {}
