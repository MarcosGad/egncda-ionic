import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CvsManagingCholesterolInteractiveCasePageRoutingModule } from './cvs-managing-cholesterol-interactive-case-routing.module';

import { CvsManagingCholesterolInteractiveCasePage } from './cvs-managing-cholesterol-interactive-case.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CvsManagingCholesterolInteractiveCasePageRoutingModule,
    MainPipe
  ],
  declarations: [CvsManagingCholesterolInteractiveCasePage]
})
export class CvsManagingCholesterolInteractiveCasePageModule {}
