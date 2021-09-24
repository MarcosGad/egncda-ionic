import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiscellaneousCurriculumPageRoutingModule } from './miscellaneous-curriculum-routing.module';

import { MiscellaneousCurriculumPage } from './miscellaneous-curriculum.page';
import { MainPipe } from '../pipes/main-pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiscellaneousCurriculumPageRoutingModule,
    MainPipe
  ],
  declarations: [MiscellaneousCurriculumPage]
})
export class MiscellaneousCurriculumPageModule {}
