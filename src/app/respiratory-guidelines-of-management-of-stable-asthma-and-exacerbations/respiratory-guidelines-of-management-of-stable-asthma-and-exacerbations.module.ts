import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespiratoryGuidelinesOfManagementOfStableAsthmaAndExacerbationsPageRoutingModule } from './respiratory-guidelines-of-management-of-stable-asthma-and-exacerbations-routing.module';

import { RespiratoryGuidelinesOfManagementOfStableAsthmaAndExacerbationsPage } from './respiratory-guidelines-of-management-of-stable-asthma-and-exacerbations.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespiratoryGuidelinesOfManagementOfStableAsthmaAndExacerbationsPageRoutingModule,
    MainPipe
  ],
  declarations: [RespiratoryGuidelinesOfManagementOfStableAsthmaAndExacerbationsPage]
})
export class RespiratoryGuidelinesOfManagementOfStableAsthmaAndExacerbationsPageModule {}
