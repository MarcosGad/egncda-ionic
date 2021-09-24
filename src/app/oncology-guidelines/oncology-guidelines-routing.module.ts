import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OncologyGuidelinesPage } from './oncology-guidelines.page';

const routes: Routes = [
  {
    path: '',
    component: OncologyGuidelinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OncologyGuidelinesPageRoutingModule {}
