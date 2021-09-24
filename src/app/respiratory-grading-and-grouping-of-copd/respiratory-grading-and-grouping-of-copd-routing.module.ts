import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespiratoryGradingAndGroupingOfCopdPage } from './respiratory-grading-and-grouping-of-copd.page';

const routes: Routes = [
  {
    path: '',
    component: RespiratoryGradingAndGroupingOfCopdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespiratoryGradingAndGroupingOfCopdPageRoutingModule {}
