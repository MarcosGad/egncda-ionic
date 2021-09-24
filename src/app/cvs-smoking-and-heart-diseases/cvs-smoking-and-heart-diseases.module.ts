import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CvsSmokingAndHeartDiseasesPageRoutingModule } from './cvs-smoking-and-heart-diseases-routing.module';

import { CvsSmokingAndHeartDiseasesPage } from './cvs-smoking-and-heart-diseases.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CvsSmokingAndHeartDiseasesPageRoutingModule,
    MainPipe
  ],
  declarations: [CvsSmokingAndHeartDiseasesPage]
})
export class CvsSmokingAndHeartDiseasesPageModule {}
