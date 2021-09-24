import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertificateMiscellaneousPageRoutingModule } from './certificate-miscellaneous-routing.module';

import { CertificateMiscellaneousPage } from './certificate-miscellaneous.page';
import { MainPipe } from '../pipes/main-pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertificateMiscellaneousPageRoutingModule,
    MainPipe
  ],
  declarations: [CertificateMiscellaneousPage]
})
export class CertificateMiscellaneousPageModule {}
