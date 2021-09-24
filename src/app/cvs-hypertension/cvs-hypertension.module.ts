import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CvsHypertensionPageRoutingModule } from './cvs-hypertension-routing.module';

import { CvsHypertensionPage } from './cvs-hypertension.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CvsHypertensionPageRoutingModule,
    MainPipe
  ],
  declarations: [CvsHypertensionPage]
})
export class CvsHypertensionPageModule {}
