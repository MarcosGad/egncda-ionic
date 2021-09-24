import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespiratoryClinicalScenariosPageRoutingModule } from './respiratory-clinical-scenarios-routing.module';

import { RespiratoryClinicalScenariosPage } from './respiratory-clinical-scenarios.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespiratoryClinicalScenariosPageRoutingModule,
    MainPipe
  ],
  declarations: [RespiratoryClinicalScenariosPage]
})
export class RespiratoryClinicalScenariosPageModule {}
