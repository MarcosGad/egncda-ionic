import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespiratoryPage } from './respiratory.page';

const routes: Routes = [
  {
    path: '',
    component: RespiratoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespiratoryPageRoutingModule {}
