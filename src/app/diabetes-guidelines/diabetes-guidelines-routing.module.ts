import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiabetesGuidelinesPage } from './diabetes-guidelines.page';

const routes: Routes = [
  {
    path: '',
    component: DiabetesGuidelinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiabetesGuidelinesPageRoutingModule {}
