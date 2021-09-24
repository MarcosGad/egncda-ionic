import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespiratoryClinicalManifestationAndScoringOfSleepDisorderedBreathingPageRoutingModule } from './respiratory-clinical-manifestation-and-scoring-of-sleep-disordered-breathing-routing.module';

import { RespiratoryClinicalManifestationAndScoringOfSleepDisorderedBreathingPage } from './respiratory-clinical-manifestation-and-scoring-of-sleep-disordered-breathing.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespiratoryClinicalManifestationAndScoringOfSleepDisorderedBreathingPageRoutingModule,
    MainPipe
  ],
  declarations: [RespiratoryClinicalManifestationAndScoringOfSleepDisorderedBreathingPage]
})
export class RespiratoryClinicalManifestationAndScoringOfSleepDisorderedBreathingPageModule {}
