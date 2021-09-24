import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvsSmokingAndHeartDiseasesPage } from './cvs-smoking-and-heart-diseases.page';

const routes: Routes = [
  {
    path: '',
    component: CvsSmokingAndHeartDiseasesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvsSmokingAndHeartDiseasesPageRoutingModule {}
