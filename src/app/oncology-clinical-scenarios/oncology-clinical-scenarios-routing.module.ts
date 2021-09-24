import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OncologyClinicalScenariosPage } from './oncology-clinical-scenarios.page';

const routes: Routes = [
  {
    path: '',
    component: OncologyClinicalScenariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OncologyClinicalScenariosPageRoutingModule {}
