import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiabetesBasicResourcesPageRoutingModule } from './diabetes-basic-resources-routing.module';

import { DiabetesBasicResourcesPage } from './diabetes-basic-resources.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiabetesBasicResourcesPageRoutingModule
  ],
  declarations: [DiabetesBasicResourcesPage]
})
export class DiabetesBasicResourcesPageModule {}
