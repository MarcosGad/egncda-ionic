import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CvsDietaryAndLifeStyleRecommendationsPageRoutingModule } from './cvs-dietary-and-life-style-recommendations-routing.module';

import { CvsDietaryAndLifeStyleRecommendationsPage } from './cvs-dietary-and-life-style-recommendations.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CvsDietaryAndLifeStyleRecommendationsPageRoutingModule,
    MainPipe
  ],
  declarations: [CvsDietaryAndLifeStyleRecommendationsPage]
})
export class CvsDietaryAndLifeStyleRecommendationsPageModule {}
