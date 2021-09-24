import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiabetesManagementInChildrenAndAdolescentsWithDiabetesPage } from './diabetes-management-in-children-and-adolescents-with-diabetes.page';

const routes: Routes = [
  {
    path: '',
    component: DiabetesManagementInChildrenAndAdolescentsWithDiabetesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiabetesManagementInChildrenAndAdolescentsWithDiabetesPageRoutingModule {}
