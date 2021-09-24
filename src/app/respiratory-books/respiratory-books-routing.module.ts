import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespiratoryBooksPage } from './respiratory-books.page';

const routes: Routes = [
  {
    path: '',
    component: RespiratoryBooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespiratoryBooksPageRoutingModule {}
