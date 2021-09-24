import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvsLatestGuidelinesOfHypertensionPage } from './cvs-latest-guidelines-of-hypertension.page';

const routes: Routes = [
  {
    path: '',
    component: CvsLatestGuidelinesOfHypertensionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvsLatestGuidelinesOfHypertensionPageRoutingModule {}
