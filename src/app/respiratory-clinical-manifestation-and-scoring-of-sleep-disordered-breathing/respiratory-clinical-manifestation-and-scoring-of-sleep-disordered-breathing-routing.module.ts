import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespiratoryClinicalManifestationAndScoringOfSleepDisorderedBreathingPage } from './respiratory-clinical-manifestation-and-scoring-of-sleep-disordered-breathing.page';

const routes: Routes = [
  {
    path: '',
    component: RespiratoryClinicalManifestationAndScoringOfSleepDisorderedBreathingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespiratoryClinicalManifestationAndScoringOfSleepDisorderedBreathingPageRoutingModule {}
