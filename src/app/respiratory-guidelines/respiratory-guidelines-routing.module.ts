import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespiratoryGuidelinesPage } from './respiratory-guidelines.page';

const routes: Routes = [
  {
    path: '',
    component: RespiratoryGuidelinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespiratoryGuidelinesPageRoutingModule {}
