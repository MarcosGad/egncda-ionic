import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiabetesSmokingAndRelatedToIncidenceOfDiabetesPageRoutingModule } from './diabetes-smoking-and-related-to-incidence-of-diabetes-routing.module';

import { DiabetesSmokingAndRelatedToIncidenceOfDiabetesPage } from './diabetes-smoking-and-related-to-incidence-of-diabetes.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiabetesSmokingAndRelatedToIncidenceOfDiabetesPageRoutingModule,
    MainPipe
  ],
  declarations: [DiabetesSmokingAndRelatedToIncidenceOfDiabetesPage]
})
export class DiabetesSmokingAndRelatedToIncidenceOfDiabetesPageModule {}
