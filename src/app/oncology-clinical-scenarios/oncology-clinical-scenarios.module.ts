import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OncologyClinicalScenariosPageRoutingModule } from './oncology-clinical-scenarios-routing.module';

import { OncologyClinicalScenariosPage } from './oncology-clinical-scenarios.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OncologyClinicalScenariosPageRoutingModule,
    MainPipe
  ],
  declarations: [OncologyClinicalScenariosPage]
})
export class OncologyClinicalScenariosPageModule {}
