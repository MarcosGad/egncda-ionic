import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OncologyPage } from './oncology.page';

const routes: Routes = [
  {
    path: '',
    component: OncologyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OncologyPageRoutingModule {}
