import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiabetesUpdatesNewsPage } from './diabetes-updates-news.page';

const routes: Routes = [
  {
    path: '',
    component: DiabetesUpdatesNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiabetesUpdatesNewsPageRoutingModule {}
