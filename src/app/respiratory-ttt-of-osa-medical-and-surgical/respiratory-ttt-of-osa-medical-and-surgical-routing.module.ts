import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespiratoryTttOfOsaMedicalAndSurgicalPage } from './respiratory-ttt-of-osa-medical-and-surgical.page';

const routes: Routes = [
  {
    path: '',
    component: RespiratoryTttOfOsaMedicalAndSurgicalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespiratoryTttOfOsaMedicalAndSurgicalPageRoutingModule {}
