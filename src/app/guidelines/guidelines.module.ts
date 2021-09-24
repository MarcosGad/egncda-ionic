import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuidelinesPageRoutingModule } from './guidelines-routing.module';

import { GuidelinesPage } from './guidelines.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuidelinesPageRoutingModule,
    MainPipe
  ],
  declarations: [GuidelinesPage]
})
export class GuidelinesPageModule {}
