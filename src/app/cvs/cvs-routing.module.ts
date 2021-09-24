import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvsPage } from './cvs.page';

const routes: Routes = [
  {
    path: '',
    component: CvsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvsPageRoutingModule {}
