import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertificateBooksPageRoutingModule } from './certificate-books-routing.module';

import { CertificateBooksPage } from './certificate-books.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertificateBooksPageRoutingModule,
    MainPipe
  ],
  declarations: [CertificateBooksPage]
})
export class CertificateBooksPageModule {}
