import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiscellaneousGuidelinesPageRoutingModule } from './miscellaneous-guidelines-routing.module';

import { MiscellaneousGuidelinesPage } from './miscellaneous-guidelines.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiscellaneousGuidelinesPageRoutingModule,
    MainPipe
  ],
  declarations: [MiscellaneousGuidelinesPage]
})
export class MiscellaneousGuidelinesPageModule {}
