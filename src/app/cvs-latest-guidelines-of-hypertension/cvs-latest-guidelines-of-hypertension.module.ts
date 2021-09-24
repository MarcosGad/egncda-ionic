import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CvsLatestGuidelinesOfHypertensionPageRoutingModule } from './cvs-latest-guidelines-of-hypertension-routing.module';

import { CvsLatestGuidelinesOfHypertensionPage } from './cvs-latest-guidelines-of-hypertension.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CvsLatestGuidelinesOfHypertensionPageRoutingModule,
    MainPipe
  ],
  declarations: [CvsLatestGuidelinesOfHypertensionPage]
})
export class CvsLatestGuidelinesOfHypertensionPageModule {}
