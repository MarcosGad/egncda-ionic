import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiabetesInsulinTherapyPage } from './diabetes-insulin-therapy.page';

const routes: Routes = [
  {
    path: '',
    component: DiabetesInsulinTherapyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiabetesInsulinTherapyPageRoutingModule {}
