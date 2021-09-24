import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespiratoryUpdatesNewsPage } from './respiratory-updates-news.page';

const routes: Routes = [
  {
    path: '',
    component: RespiratoryUpdatesNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespiratoryUpdatesNewsPageRoutingModule {}
