import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespiratoryNormalSleepPhysiologyDefinitionRiskFactorsAndPathogenesisOfOsaPageRoutingModule } from './respiratory-normal-sleep-physiology-definition-risk-factors-and-pathogenesis-of-osa-routing.module';

import { RespiratoryNormalSleepPhysiologyDefinitionRiskFactorsAndPathogenesisOfOsaPage } from './respiratory-normal-sleep-physiology-definition-risk-factors-and-pathogenesis-of-osa.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespiratoryNormalSleepPhysiologyDefinitionRiskFactorsAndPathogenesisOfOsaPageRoutingModule,
    MainPipe
  ],
  declarations: [RespiratoryNormalSleepPhysiologyDefinitionRiskFactorsAndPathogenesisOfOsaPage]
})
export class RespiratoryNormalSleepPhysiologyDefinitionRiskFactorsAndPathogenesisOfOsaPageModule {}
