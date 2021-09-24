import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodePPage } from './code-p.page';

const routes: Routes = [
  {
    path: '',
    component: CodePPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodePPageRoutingModule {}
