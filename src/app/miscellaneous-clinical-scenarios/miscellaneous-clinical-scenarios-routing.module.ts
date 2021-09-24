import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiscellaneousClinicalScenariosPage } from './miscellaneous-clinical-scenarios.page';

const routes: Routes = [
  {
    path: '',
    component: MiscellaneousClinicalScenariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiscellaneousClinicalScenariosPageRoutingModule {}
