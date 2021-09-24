import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiscellaneousBooksPage } from './miscellaneous-books.page';

const routes: Routes = [
  {
    path: '',
    component: MiscellaneousBooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiscellaneousBooksPageRoutingModule {}
