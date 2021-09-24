import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OncologyBasicResourcesPageRoutingModule } from './oncology-basic-resources-routing.module';

import { OncologyBasicResourcesPage } from './oncology-basic-resources.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OncologyBasicResourcesPageRoutingModule
  ],
  declarations: [OncologyBasicResourcesPage]
})
export class OncologyBasicResourcesPageModule {}
