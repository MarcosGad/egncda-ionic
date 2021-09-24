import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CvsSmokingCessationTherapiesForTheCardiologistPageRoutingModule } from './cvs-smoking-cessation-therapies-for-the-cardiologist-routing.module';

import { CvsSmokingCessationTherapiesForTheCardiologistPage } from './cvs-smoking-cessation-therapies-for-the-cardiologist.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CvsSmokingCessationTherapiesForTheCardiologistPageRoutingModule,
    MainPipe
  ],
  declarations: [CvsSmokingCessationTherapiesForTheCardiologistPage]
})
export class CvsSmokingCessationTherapiesForTheCardiologistPageModule {}
