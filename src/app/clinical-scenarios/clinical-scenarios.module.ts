import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClinicalScenariosPageRoutingModule } from './clinical-scenarios-routing.module';

import { ClinicalScenariosPage } from './clinical-scenarios.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClinicalScenariosPageRoutingModule,
    MainPipe
  ],
  declarations: [ClinicalScenariosPage]
})
export class ClinicalScenariosPageModule {}
