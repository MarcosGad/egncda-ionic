import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OncologyBooksPage } from './oncology-books.page';

const routes: Routes = [
  {
    path: '',
    component: OncologyBooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OncologyBooksPageRoutingModule {}
