import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespiratoryInvestigationForDiagnosisStagingOfLungCancerPageRoutingModule } from './respiratory-investigation-for-diagnosis-staging-of-lung-cancer-routing.module';

import { RespiratoryInvestigationForDiagnosisStagingOfLungCancerPage } from './respiratory-investigation-for-diagnosis-staging-of-lung-cancer.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespiratoryInvestigationForDiagnosisStagingOfLungCancerPageRoutingModule,
    MainPipe
  ],
  declarations: [RespiratoryInvestigationForDiagnosisStagingOfLungCancerPage]
})
export class RespiratoryInvestigationForDiagnosisStagingOfLungCancerPageModule {}
