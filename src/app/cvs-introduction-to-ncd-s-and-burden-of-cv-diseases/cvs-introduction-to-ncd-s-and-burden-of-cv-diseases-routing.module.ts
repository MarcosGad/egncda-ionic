import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvsIntroductionToNcdSAndBurdenOfCvDiseasesPage } from './cvs-introduction-to-ncd-s-and-burden-of-cv-diseases.page';

const routes: Routes = [
  {
    path: '',
    component: CvsIntroductionToNcdSAndBurdenOfCvDiseasesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvsIntroductionToNcdSAndBurdenOfCvDiseasesPageRoutingModule {}
