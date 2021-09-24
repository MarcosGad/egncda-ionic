import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvsInteractiveCasePage } from './cvs-interactive-case.page';

const routes: Routes = [
  {
    path: '',
    component: CvsInteractiveCasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvsInteractiveCasePageRoutingModule {}
