import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OncologyGuidelinesPageRoutingModule } from './oncology-guidelines-routing.module';

import { OncologyGuidelinesPage } from './oncology-guidelines.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OncologyGuidelinesPageRoutingModule,
    MainPipe
  ],
  declarations: [OncologyGuidelinesPage]
})
export class OncologyGuidelinesPageModule {}
