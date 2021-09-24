import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClinicalScenariosPage } from './clinical-scenarios.page';

const routes: Routes = [
  {
    path: '',
    component: ClinicalScenariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClinicalScenariosPageRoutingModule {}
