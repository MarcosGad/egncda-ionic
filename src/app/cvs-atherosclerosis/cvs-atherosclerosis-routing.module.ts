import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvsAtherosclerosisPage } from './cvs-atherosclerosis.page';

const routes: Routes = [
  {
    path: '',
    component: CvsAtherosclerosisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvsAtherosclerosisPageRoutingModule {}
