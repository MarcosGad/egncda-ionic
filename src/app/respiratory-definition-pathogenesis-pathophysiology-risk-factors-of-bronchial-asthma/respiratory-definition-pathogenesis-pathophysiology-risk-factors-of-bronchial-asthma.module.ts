import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespiratoryDefinitionPathogenesisPathophysiologyRiskFactorsOfBronchialAsthmaPageRoutingModule } from './respiratory-definition-pathogenesis-pathophysiology-risk-factors-of-bronchial-asthma-routing.module';

import { RespiratoryDefinitionPathogenesisPathophysiologyRiskFactorsOfBronchialAsthmaPage } from './respiratory-definition-pathogenesis-pathophysiology-risk-factors-of-bronchial-asthma.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespiratoryDefinitionPathogenesisPathophysiologyRiskFactorsOfBronchialAsthmaPageRoutingModule,
    MainPipe
  ],
  declarations: [RespiratoryDefinitionPathogenesisPathophysiologyRiskFactorsOfBronchialAsthmaPage]
})
export class RespiratoryDefinitionPathogenesisPathophysiologyRiskFactorsOfBronchialAsthmaPageModule {}
