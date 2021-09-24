import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespiratoryCurriculumPageRoutingModule } from './respiratory-curriculum-routing.module';

import { RespiratoryCurriculumPage } from './respiratory-curriculum.page';
import { MainPipe } from '../pipes/main-pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespiratoryCurriculumPageRoutingModule,
    MainPipe
  ],
  declarations: [RespiratoryCurriculumPage]
})
export class RespiratoryCurriculumPageModule {}
