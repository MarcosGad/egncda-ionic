import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertificateExamPageRoutingModule } from './certificate-exam-routing.module';

import { CertificateExamPage } from './certificate-exam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertificateExamPageRoutingModule
  ],
  declarations: [CertificateExamPage]
})
export class CertificateExamPageModule {}
