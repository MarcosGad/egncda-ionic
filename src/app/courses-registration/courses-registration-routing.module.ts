import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesRegistrationPage } from './courses-registration.page';

const routes: Routes = [
  {
    path: '',
    component: CoursesRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRegistrationPageRoutingModule {}
