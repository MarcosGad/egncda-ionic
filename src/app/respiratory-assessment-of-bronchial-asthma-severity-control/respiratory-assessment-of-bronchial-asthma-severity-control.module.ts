import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespiratoryAssessmentOfBronchialAsthmaSeverityControlPageRoutingModule } from './respiratory-assessment-of-bronchial-asthma-severity-control-routing.module';

import { RespiratoryAssessmentOfBronchialAsthmaSeverityControlPage } from './respiratory-assessment-of-bronchial-asthma-severity-control.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespiratoryAssessmentOfBronchialAsthmaSeverityControlPageRoutingModule,
    MainPipe
  ],
  declarations: [RespiratoryAssessmentOfBronchialAsthmaSeverityControlPage]
})
export class RespiratoryAssessmentOfBronchialAsthmaSeverityControlPageModule {}
