import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiscellaneousBasicResourcesPage } from './miscellaneous-basic-resources.page';

const routes: Routes = [
  {
    path: '',
    component: MiscellaneousBasicResourcesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiscellaneousBasicResourcesPageRoutingModule {}
