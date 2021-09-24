import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvsManagingCholesterolInteractiveCasePage } from './cvs-managing-cholesterol-interactive-case.page';

const routes: Routes = [
  {
    path: '',
    component: CvsManagingCholesterolInteractiveCasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvsManagingCholesterolInteractiveCasePageRoutingModule {}
