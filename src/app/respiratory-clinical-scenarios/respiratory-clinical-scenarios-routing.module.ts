import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespiratoryClinicalScenariosPage } from './respiratory-clinical-scenarios.page';

const routes: Routes = [
  {
    path: '',
    component: RespiratoryClinicalScenariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespiratoryClinicalScenariosPageRoutingModule {}
