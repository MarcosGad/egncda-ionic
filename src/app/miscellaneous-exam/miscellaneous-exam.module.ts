import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiscellaneousExamPageRoutingModule } from './miscellaneous-exam-routing.module';

import { MiscellaneousExamPage } from './miscellaneous-exam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiscellaneousExamPageRoutingModule
  ],
  declarations: [MiscellaneousExamPage]
})
export class MiscellaneousExamPageModule {}
