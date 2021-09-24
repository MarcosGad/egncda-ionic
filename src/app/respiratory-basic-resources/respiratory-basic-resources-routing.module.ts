import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespiratoryBasicResourcesPage } from './respiratory-basic-resources.page';

const routes: Routes = [
  {
    path: '',
    component: RespiratoryBasicResourcesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespiratoryBasicResourcesPageRoutingModule {}
