import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OncologyExamPageRoutingModule } from './oncology-exam-routing.module';

import { OncologyExamPage } from './oncology-exam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OncologyExamPageRoutingModule
  ],
  declarations: [OncologyExamPage]
})
export class OncologyExamPageModule {}
