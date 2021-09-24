import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertificateCurriculumPageRoutingModule } from './certificate-curriculum-routing.module';

import { CertificateCurriculumPage } from './certificate-curriculum.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertificateCurriculumPageRoutingModule,
    MainPipe
  ],
  declarations: [CertificateCurriculumPage]
})
export class CertificateCurriculumPageModule {}
