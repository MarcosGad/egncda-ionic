import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CvsIntroductionToNcdSAndBurdenOfCvDiseasesPageRoutingModule } from './cvs-introduction-to-ncd-s-and-burden-of-cv-diseases-routing.module';

import { CvsIntroductionToNcdSAndBurdenOfCvDiseasesPage } from './cvs-introduction-to-ncd-s-and-burden-of-cv-diseases.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CvsIntroductionToNcdSAndBurdenOfCvDiseasesPageRoutingModule,
    MainPipe
  ],
  declarations: [CvsIntroductionToNcdSAndBurdenOfCvDiseasesPage]
})
export class CvsIntroductionToNcdSAndBurdenOfCvDiseasesPageModule {}
