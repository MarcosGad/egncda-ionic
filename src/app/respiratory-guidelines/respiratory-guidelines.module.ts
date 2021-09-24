import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespiratoryGuidelinesPageRoutingModule } from './respiratory-guidelines-routing.module';

import { RespiratoryGuidelinesPage } from './respiratory-guidelines.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespiratoryGuidelinesPageRoutingModule,
    MainPipe
  ],
  declarations: [RespiratoryGuidelinesPage]
})
export class RespiratoryGuidelinesPageModule {}
