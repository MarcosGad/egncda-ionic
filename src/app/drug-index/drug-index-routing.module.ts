import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrugIndexPage } from './drug-index.page';

const routes: Routes = [
  {
    path: '',
    component: DrugIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrugIndexPageRoutingModule {}
