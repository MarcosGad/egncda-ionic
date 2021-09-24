import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrugIndexPageRoutingModule } from './drug-index-routing.module';

import { DrugIndexPage } from './drug-index.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrugIndexPageRoutingModule,
    MainPipe
  ],
  declarations: [DrugIndexPage]
})
export class DrugIndexPageModule {}
