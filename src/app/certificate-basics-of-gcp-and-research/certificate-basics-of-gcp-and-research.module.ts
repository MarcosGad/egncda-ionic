import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertificateBasicsOfGcpAndResearchPageRoutingModule } from './certificate-basics-of-gcp-and-research-routing.module';

import { CertificateBasicsOfGcpAndResearchPage } from './certificate-basics-of-gcp-and-research.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertificateBasicsOfGcpAndResearchPageRoutingModule,
    MainPipe
  ],
  declarations: [CertificateBasicsOfGcpAndResearchPage]
})
export class CertificateBasicsOfGcpAndResearchPageModule {}
