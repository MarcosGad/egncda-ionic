import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPPage } from './register-p.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPPageRoutingModule {}
