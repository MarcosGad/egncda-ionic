import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertificateBasicResourcesPageRoutingModule } from './certificate-basic-resources-routing.module';

import { CertificateBasicResourcesPage } from './certificate-basic-resources.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertificateBasicResourcesPageRoutingModule
  ],
  declarations: [CertificateBasicResourcesPage]
})
export class CertificateBasicResourcesPageModule {}
