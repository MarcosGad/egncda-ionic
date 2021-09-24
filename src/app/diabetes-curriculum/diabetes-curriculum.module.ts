import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiabetesCurriculumPageRoutingModule } from './diabetes-curriculum-routing.module';

import { DiabetesCurriculumPage } from './diabetes-curriculum.page';
import { MainPipe } from '../pipes/main-pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiabetesCurriculumPageRoutingModule,
    MainPipe
  ],
  declarations: [DiabetesCurriculumPage]
})
export class DiabetesCurriculumPageModule {}
