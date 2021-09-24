import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiabetesManagementInChildrenAndAdolescentsWithDiabetesPageRoutingModule } from './diabetes-management-in-children-and-adolescents-with-diabetes-routing.module';

import { DiabetesManagementInChildrenAndAdolescentsWithDiabetesPage } from './diabetes-management-in-children-and-adolescents-with-diabetes.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiabetesManagementInChildrenAndAdolescentsWithDiabetesPageRoutingModule,
    MainPipe
  ],
  declarations: [DiabetesManagementInChildrenAndAdolescentsWithDiabetesPage]
})
export class DiabetesManagementInChildrenAndAdolescentsWithDiabetesPageModule {}
