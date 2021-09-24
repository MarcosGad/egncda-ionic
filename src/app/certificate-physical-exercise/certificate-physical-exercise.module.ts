import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertificatePhysicalExercisePageRoutingModule } from './certificate-physical-exercise-routing.module';

import { CertificatePhysicalExercisePage } from './certificate-physical-exercise.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertificatePhysicalExercisePageRoutingModule,
    MainPipe
  ],
  declarations: [CertificatePhysicalExercisePage]
})
export class CertificatePhysicalExercisePageModule {}
