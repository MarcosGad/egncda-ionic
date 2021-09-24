import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertificateDigitalHealthPageRoutingModule } from './certificate-digital-health-routing.module';

import { CertificateDigitalHealthPage } from './certificate-digital-health.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertificateDigitalHealthPageRoutingModule,
    MainPipe
  ],
  declarations: [CertificateDigitalHealthPage]
})
export class CertificateDigitalHealthPageModule {}
