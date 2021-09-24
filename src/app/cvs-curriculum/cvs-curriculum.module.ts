import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CvsCurriculumPageRoutingModule } from './cvs-curriculum-routing.module';

import { CvsCurriculumPage } from './cvs-curriculum.page';
import { MainPipe } from '../pipes/main-pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CvsCurriculumPageRoutingModule,
    MainPipe
  ],
  declarations: [CvsCurriculumPage]
})
export class CvsCurriculumPageModule {}
