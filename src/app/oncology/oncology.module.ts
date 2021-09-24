import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OncologyPageRoutingModule } from './oncology-routing.module';

import { OncologyPage } from './oncology.page';
import { MainPipe } from '../pipes/main-pipe.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OncologyPageRoutingModule,
    MainPipe
  ],
  declarations: [OncologyPage]
})
export class OncologyPageModule {}
