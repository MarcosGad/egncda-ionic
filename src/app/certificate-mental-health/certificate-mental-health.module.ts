import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertificateMentalHealthPageRoutingModule } from './certificate-mental-health-routing.module';

import { CertificateMentalHealthPage } from './certificate-mental-health.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertificateMentalHealthPageRoutingModule,
    MainPipe
  ],
  declarations: [CertificateMentalHealthPage]
})
export class CertificateMentalHealthPageModule {}
