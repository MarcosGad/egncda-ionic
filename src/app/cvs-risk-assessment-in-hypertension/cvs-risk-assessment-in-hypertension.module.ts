import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CvsRiskAssessmentInHypertensionPageRoutingModule } from './cvs-risk-assessment-in-hypertension-routing.module';

import { CvsRiskAssessmentInHypertensionPage } from './cvs-risk-assessment-in-hypertension.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CvsRiskAssessmentInHypertensionPageRoutingModule,
    MainPipe
  ],
  declarations: [CvsRiskAssessmentInHypertensionPage]
})
export class CvsRiskAssessmentInHypertensionPageModule {}
