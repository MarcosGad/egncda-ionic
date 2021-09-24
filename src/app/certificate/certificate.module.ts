import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertificatePageRoutingModule } from './certificate-routing.module';

import { CertificatePage } from './certificate.page';

import { MainPipe } from '../pipes/main-pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertificatePageRoutingModule,
    MainPipe
  ],
  declarations: [CertificatePage]
})
export class CertificatePageModule {}
