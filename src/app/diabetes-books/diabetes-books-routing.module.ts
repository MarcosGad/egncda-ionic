import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiabetesBooksPage } from './diabetes-books.page';

const routes: Routes = [
  {
    path: '',
    component: DiabetesBooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiabetesBooksPageRoutingModule {}
