import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvsDietaryAndLifeStyleRecommendationsPage } from './cvs-dietary-and-life-style-recommendations.page';

const routes: Routes = [
  {
    path: '',
    component: CvsDietaryAndLifeStyleRecommendationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvsDietaryAndLifeStyleRecommendationsPageRoutingModule {}
