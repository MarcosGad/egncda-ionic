import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiabetesPageRoutingModule } from './diabetes-routing.module';

import { DiabetesPage } from './diabetes.page';
import { MainPipe } from '../pipes/main-pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiabetesPageRoutingModule,
    MainPipe
  ],
  declarations: [DiabetesPage],
})
export class DiabetesPageModule {}
