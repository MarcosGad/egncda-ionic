import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertificateObesityAndNutritionPageRoutingModule } from './certificate-obesity-and-nutrition-routing.module';

import { CertificateObesityAndNutritionPage } from './certificate-obesity-and-nutrition.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertificateObesityAndNutritionPageRoutingModule,
    MainPipe
  ],
  declarations: [CertificateObesityAndNutritionPage]
})
export class CertificateObesityAndNutritionPageModule {}
