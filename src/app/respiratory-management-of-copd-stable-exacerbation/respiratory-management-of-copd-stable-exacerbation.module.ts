import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespiratoryManagementOfCopdStableExacerbationPageRoutingModule } from './respiratory-management-of-copd-stable-exacerbation-routing.module';

import { RespiratoryManagementOfCopdStableExacerbationPage } from './respiratory-management-of-copd-stable-exacerbation.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespiratoryManagementOfCopdStableExacerbationPageRoutingModule,
    MainPipe
  ],
  declarations: [RespiratoryManagementOfCopdStableExacerbationPage]
})
export class RespiratoryManagementOfCopdStableExacerbationPageModule {}
