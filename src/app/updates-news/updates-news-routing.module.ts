import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatesNewsPage } from './updates-news.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatesNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatesNewsPageRoutingModule {}
