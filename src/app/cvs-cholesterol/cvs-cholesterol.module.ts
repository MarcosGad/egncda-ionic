import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CvsCholesterolPageRoutingModule } from './cvs-cholesterol-routing.module';

import { CvsCholesterolPage } from './cvs-cholesterol.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CvsCholesterolPageRoutingModule,
    MainPipe
  ],
  declarations: [CvsCholesterolPage]
})
export class CvsCholesterolPageModule {}
