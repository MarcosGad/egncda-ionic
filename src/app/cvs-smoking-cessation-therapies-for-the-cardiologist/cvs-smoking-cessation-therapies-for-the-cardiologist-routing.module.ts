import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvsSmokingCessationTherapiesForTheCardiologistPage } from './cvs-smoking-cessation-therapies-for-the-cardiologist.page';

const routes: Routes = [
  {
    path: '',
    component: CvsSmokingCessationTherapiesForTheCardiologistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvsSmokingCessationTherapiesForTheCardiologistPageRoutingModule {}
