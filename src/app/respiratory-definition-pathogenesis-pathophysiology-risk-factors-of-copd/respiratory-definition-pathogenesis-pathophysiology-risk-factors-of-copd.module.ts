import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespiratoryDefinitionPathogenesisPathophysiologyRiskFactorsOfCopdPageRoutingModule } from './respiratory-definition-pathogenesis-pathophysiology-risk-factors-of-copd-routing.module';

import { RespiratoryDefinitionPathogenesisPathophysiologyRiskFactorsOfCopdPage } from './respiratory-definition-pathogenesis-pathophysiology-risk-factors-of-copd.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespiratoryDefinitionPathogenesisPathophysiologyRiskFactorsOfCopdPageRoutingModule,
    MainPipe
  ],
  declarations: [RespiratoryDefinitionPathogenesisPathophysiologyRiskFactorsOfCopdPage]
})
export class RespiratoryDefinitionPathogenesisPathophysiologyRiskFactorsOfCopdPageModule {}
