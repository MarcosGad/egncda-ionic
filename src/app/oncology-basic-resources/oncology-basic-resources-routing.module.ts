import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OncologyBasicResourcesPage } from './oncology-basic-resources.page';

const routes: Routes = [
  {
    path: '',
    component: OncologyBasicResourcesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OncologyBasicResourcesPageRoutingModule {}
