import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiscellaneousBasicResourcesPageRoutingModule } from './miscellaneous-basic-resources-routing.module';

import { MiscellaneousBasicResourcesPage } from './miscellaneous-basic-resources.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiscellaneousBasicResourcesPageRoutingModule
  ],
  declarations: [MiscellaneousBasicResourcesPage]
})
export class MiscellaneousBasicResourcesPageModule {}
