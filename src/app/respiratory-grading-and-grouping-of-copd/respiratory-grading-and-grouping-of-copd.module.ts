import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespiratoryGradingAndGroupingOfCopdPageRoutingModule } from './respiratory-grading-and-grouping-of-copd-routing.module';

import { RespiratoryGradingAndGroupingOfCopdPage } from './respiratory-grading-and-grouping-of-copd.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespiratoryGradingAndGroupingOfCopdPageRoutingModule,
    MainPipe
  ],
  declarations: [RespiratoryGradingAndGroupingOfCopdPage]
})
export class RespiratoryGradingAndGroupingOfCopdPageModule {}
