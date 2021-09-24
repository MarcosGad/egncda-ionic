import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiabetesBasicResourcesPage } from './diabetes-basic-resources.page';

const routes: Routes = [
  {
    path: '',
    component: DiabetesBasicResourcesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiabetesBasicResourcesPageRoutingModule {}
