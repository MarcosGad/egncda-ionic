import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificatePhysicalExercisePage } from './certificate-physical-exercise.page';

const routes: Routes = [
  {
    path: '',
    component: CertificatePhysicalExercisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificatePhysicalExercisePageRoutingModule {}
