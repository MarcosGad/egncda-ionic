import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiabetesIntroductionToNcdSAndBurdenOfDiabetesPageRoutingModule } from './diabetes-introduction-to-ncd-s-and-burden-of-diabetes-routing.module';

import { DiabetesIntroductionToNcdSAndBurdenOfDiabetesPage } from './diabetes-introduction-to-ncd-s-and-burden-of-diabetes.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiabetesIntroductionToNcdSAndBurdenOfDiabetesPageRoutingModule,
    MainPipe
  ],
  declarations: [DiabetesIntroductionToNcdSAndBurdenOfDiabetesPage]
})
export class DiabetesIntroductionToNcdSAndBurdenOfDiabetesPageModule {}
