import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiabetesGuidelinesPageRoutingModule } from './diabetes-guidelines-routing.module';

import { DiabetesGuidelinesPage } from './diabetes-guidelines.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiabetesGuidelinesPageRoutingModule,
    MainPipe
  ],
  declarations: [DiabetesGuidelinesPage]
})
export class DiabetesGuidelinesPageModule {}
