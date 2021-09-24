import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiscellaneousClinicalScenariosPageRoutingModule } from './miscellaneous-clinical-scenarios-routing.module';

import { MiscellaneousClinicalScenariosPage } from './miscellaneous-clinical-scenarios.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiscellaneousClinicalScenariosPageRoutingModule,
    MainPipe
  ],
  declarations: [MiscellaneousClinicalScenariosPage]
})
export class MiscellaneousClinicalScenariosPageModule {}
