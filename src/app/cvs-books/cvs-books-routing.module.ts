import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvsBooksPage } from './cvs-books.page';

const routes: Routes = [
  {
    path: '',
    component: CvsBooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvsBooksPageRoutingModule {}
