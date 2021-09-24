import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertificateBasicsOfMedicalStatisticsPageRoutingModule } from './certificate-basics-of-medical-statistics-routing.module';

import { CertificateBasicsOfMedicalStatisticsPage } from './certificate-basics-of-medical-statistics.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertificateBasicsOfMedicalStatisticsPageRoutingModule,
    MainPipe
  ],
  declarations: [CertificateBasicsOfMedicalStatisticsPage]
})
export class CertificateBasicsOfMedicalStatisticsPageModule {}
