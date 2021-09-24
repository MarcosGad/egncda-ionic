import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiscellaneousMentalHealthPage } from './miscellaneous-mental-health.page';

const routes: Routes = [
  {
    path: '',
    component: MiscellaneousMentalHealthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiscellaneousMentalHealthPageRoutingModule {}
