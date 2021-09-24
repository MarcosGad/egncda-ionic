import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertificateCountrySpecificHealthIssuesPageRoutingModule } from './certificate-country-specific-health-issues-routing.module';

import { CertificateCountrySpecificHealthIssuesPage } from './certificate-country-specific-health-issues.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertificateCountrySpecificHealthIssuesPageRoutingModule,
    MainPipe
  ],
  declarations: [CertificateCountrySpecificHealthIssuesPage]
})
export class CertificateCountrySpecificHealthIssuesPageModule {}
