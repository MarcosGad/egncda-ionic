import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertificateClinicalScenariosPageRoutingModule } from './certificate-clinical-scenarios-routing.module';

import { CertificateClinicalScenariosPage } from './certificate-clinical-scenarios.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertificateClinicalScenariosPageRoutingModule,
    MainPipe
  ],
  declarations: [CertificateClinicalScenariosPage]
})
export class CertificateClinicalScenariosPageModule {}
