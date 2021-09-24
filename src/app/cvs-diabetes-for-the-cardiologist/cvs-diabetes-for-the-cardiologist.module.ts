import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CvsDiabetesForTheCardiologistPageRoutingModule } from './cvs-diabetes-for-the-cardiologist-routing.module';

import { CvsDiabetesForTheCardiologistPage } from './cvs-diabetes-for-the-cardiologist.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CvsDiabetesForTheCardiologistPageRoutingModule,
    MainPipe
  ],
  declarations: [CvsDiabetesForTheCardiologistPage]
})
export class CvsDiabetesForTheCardiologistPageModule {}
