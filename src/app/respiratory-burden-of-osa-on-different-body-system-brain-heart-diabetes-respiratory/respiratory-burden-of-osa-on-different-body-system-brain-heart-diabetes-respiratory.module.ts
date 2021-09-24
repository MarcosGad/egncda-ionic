import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespiratoryBurdenOfOsaOnDifferentBodySystemBrainHeartDiabetesRespiratoryPageRoutingModule } from './respiratory-burden-of-osa-on-different-body-system-brain-heart-diabetes-respiratory-routing.module';

import { RespiratoryBurdenOfOsaOnDifferentBodySystemBrainHeartDiabetesRespiratoryPage } from './respiratory-burden-of-osa-on-different-body-system-brain-heart-diabetes-respiratory.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespiratoryBurdenOfOsaOnDifferentBodySystemBrainHeartDiabetesRespiratoryPageRoutingModule,
    MainPipe
  ],
  declarations: [RespiratoryBurdenOfOsaOnDifferentBodySystemBrainHeartDiabetesRespiratoryPage]
})
export class RespiratoryBurdenOfOsaOnDifferentBodySystemBrainHeartDiabetesRespiratoryPageModule {}
