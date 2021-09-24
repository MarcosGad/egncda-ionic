import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespiratoryBasicResourcesPageRoutingModule } from './respiratory-basic-resources-routing.module';

import { RespiratoryBasicResourcesPage } from './respiratory-basic-resources.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespiratoryBasicResourcesPageRoutingModule
  ],
  declarations: [RespiratoryBasicResourcesPage]
})
export class RespiratoryBasicResourcesPageModule {}
