import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiabetesClinicalScenariosPageRoutingModule } from './diabetes-clinical-scenarios-routing.module';

import { DiabetesClinicalScenariosPage } from './diabetes-clinical-scenarios.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiabetesClinicalScenariosPageRoutingModule,
    MainPipe
  ],
  declarations: [DiabetesClinicalScenariosPage]
})
export class DiabetesClinicalScenariosPageModule {}
