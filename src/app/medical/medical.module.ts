import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalPageRoutingModule } from './medical-routing.module';

import { MedicalPage } from './medical.page';
import { MainPipe } from '../pipes/main-pipe.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalPageRoutingModule,
    MainPipe
  ],
  declarations: [MedicalPage]
})
export class MedicalPageModule {}
