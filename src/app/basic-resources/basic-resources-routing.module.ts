import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicResourcesPage } from './basic-resources.page';

const routes: Routes = [
  {
    path: '',
    component: BasicResourcesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicResourcesPageRoutingModule {}
