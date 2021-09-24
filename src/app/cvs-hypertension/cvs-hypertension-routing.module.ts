import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvsHypertensionPage } from './cvs-hypertension.page';

const routes: Routes = [
  {
    path: '',
    component: CvsHypertensionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvsHypertensionPageRoutingModule {}
