import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QandanPage } from './qandan.page';

const routes: Routes = [
  {
    path: '',
    component: QandanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QandanPageRoutingModule {}
