import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiscellaneousUpdatesNewsPage } from './miscellaneous-updates-news.page';

const routes: Routes = [
  {
    path: '',
    component: MiscellaneousUpdatesNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiscellaneousUpdatesNewsPageRoutingModule {}
