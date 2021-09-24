import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiabetesNutritionTherapyAndPhysicalActivityPage } from './diabetes-nutrition-therapy-and-physical-activity.page';

const routes: Routes = [
  {
    path: '',
    component: DiabetesNutritionTherapyAndPhysicalActivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiabetesNutritionTherapyAndPhysicalActivityPageRoutingModule {}
