import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiabetesInteractiveCasePage } from './diabetes-interactive-case.page';

const routes: Routes = [
  {
    path: '',
    component: DiabetesInteractiveCasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiabetesInteractiveCasePageRoutingModule {}
