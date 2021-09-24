import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvsDrugTherapyOverviewPage } from './cvs-drug-therapy-overview.page';

const routes: Routes = [
  {
    path: '',
    component: CvsDrugTherapyOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvsDrugTherapyOverviewPageRoutingModule {}
