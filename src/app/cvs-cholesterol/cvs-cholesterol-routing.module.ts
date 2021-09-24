import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvsCholesterolPage } from './cvs-cholesterol.page';

const routes: Routes = [
  {
    path: '',
    component: CvsCholesterolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvsCholesterolPageRoutingModule {}
