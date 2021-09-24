import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertificateSmokingCessationPageRoutingModule } from './certificate-smoking-cessation-routing.module';

import { CertificateSmokingCessationPage } from './certificate-smoking-cessation.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertificateSmokingCessationPageRoutingModule,
    MainPipe
  ],
  declarations: [CertificateSmokingCessationPage]
})
export class CertificateSmokingCessationPageModule {}
