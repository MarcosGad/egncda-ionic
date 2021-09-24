import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiabetesExamPageRoutingModule } from './diabetes-exam-routing.module';

import { DiabetesExamPage } from './diabetes-exam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiabetesExamPageRoutingModule
  ],
  declarations: [DiabetesExamPage]
})
export class DiabetesExamPageModule {}
