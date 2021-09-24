import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespiratoryRiskFactorsClassificationsAndClinicalManifestationsOfLungCancerPageRoutingModule } from './respiratory-risk-factors-classifications-and-clinical-manifestations-of-lung-cancer-routing.module';

import { RespiratoryRiskFactorsClassificationsAndClinicalManifestationsOfLungCancerPage } from './respiratory-risk-factors-classifications-and-clinical-manifestations-of-lung-cancer.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespiratoryRiskFactorsClassificationsAndClinicalManifestationsOfLungCancerPageRoutingModule,
    MainPipe
  ],
  declarations: [RespiratoryRiskFactorsClassificationsAndClinicalManifestationsOfLungCancerPage]
})
export class RespiratoryRiskFactorsClassificationsAndClinicalManifestationsOfLungCancerPageModule {}
