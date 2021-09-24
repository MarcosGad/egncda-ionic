import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiabetesInteractiveCasePageRoutingModule } from './diabetes-interactive-case-routing.module';

import { DiabetesInteractiveCasePage } from './diabetes-interactive-case.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiabetesInteractiveCasePageRoutingModule,
    MainPipe
  ],
  declarations: [DiabetesInteractiveCasePage]
})
export class DiabetesInteractiveCasePageModule {}
