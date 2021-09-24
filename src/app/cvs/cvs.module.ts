import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CvsPageRoutingModule } from './cvs-routing.module';

import { CvsPage } from './cvs.page';
import { MainPipe } from '../pipes/main-pipe.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CvsPageRoutingModule,
    MainPipe
  ],
  declarations: [CvsPage]
})
export class CvsPageModule {}
