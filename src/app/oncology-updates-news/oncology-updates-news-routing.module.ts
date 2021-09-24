import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OncologyUpdatesNewsPage } from './oncology-updates-news.page';

const routes: Routes = [
  {
    path: '',
    component: OncologyUpdatesNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OncologyUpdatesNewsPageRoutingModule {}
