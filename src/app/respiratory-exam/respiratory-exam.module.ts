import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespiratoryExamPageRoutingModule } from './respiratory-exam-routing.module';

import { RespiratoryExamPage } from './respiratory-exam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespiratoryExamPageRoutingModule
  ],
  declarations: [RespiratoryExamPage]
})
export class RespiratoryExamPageModule {}
