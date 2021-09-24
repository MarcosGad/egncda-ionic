import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertificateGuidelinesPageRoutingModule } from './certificate-guidelines-routing.module';

import { CertificateGuidelinesPage } from './certificate-guidelines.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertificateGuidelinesPageRoutingModule,
    MainPipe
  ],
  declarations: [CertificateGuidelinesPage]
})
export class CertificateGuidelinesPageModule {}
