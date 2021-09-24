import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OncologyCurriculumPageRoutingModule } from './oncology-curriculum-routing.module';

import { OncologyCurriculumPage } from './oncology-curriculum.page';
import { MainPipe } from '../pipes/main-pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OncologyCurriculumPageRoutingModule,
    MainPipe
  ],
  declarations: [OncologyCurriculumPage]
})
export class OncologyCurriculumPageModule {}
