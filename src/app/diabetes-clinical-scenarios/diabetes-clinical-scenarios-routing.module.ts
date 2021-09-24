import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiabetesClinicalScenariosPage } from './diabetes-clinical-scenarios.page';

const routes: Routes = [
  {
    path: '',
    component: DiabetesClinicalScenariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiabetesClinicalScenariosPageRoutingModule {}
