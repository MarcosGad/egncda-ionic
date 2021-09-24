import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CvsInteractiveCasePageRoutingModule } from './cvs-interactive-case-routing.module';

import { CvsInteractiveCasePage } from './cvs-interactive-case.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CvsInteractiveCasePageRoutingModule,
    MainPipe
  ],
  declarations: [CvsInteractiveCasePage]
})
export class CvsInteractiveCasePageModule {}
