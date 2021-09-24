import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertificateUpdatesNewsPageRoutingModule } from './certificate-updates-news-routing.module';

import { CertificateUpdatesNewsPage } from './certificate-updates-news.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertificateUpdatesNewsPageRoutingModule,
    MainPipe
  ],
  declarations: [CertificateUpdatesNewsPage]
})
export class CertificateUpdatesNewsPageModule {}
