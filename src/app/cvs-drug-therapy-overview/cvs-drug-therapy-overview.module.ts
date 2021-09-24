import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CvsDrugTherapyOverviewPageRoutingModule } from './cvs-drug-therapy-overview-routing.module';

import { CvsDrugTherapyOverviewPage } from './cvs-drug-therapy-overview.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CvsDrugTherapyOverviewPageRoutingModule,
    MainPipe
  ],
  declarations: [CvsDrugTherapyOverviewPage]
})
export class CvsDrugTherapyOverviewPageModule {}
