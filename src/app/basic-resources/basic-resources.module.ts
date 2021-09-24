import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasicResourcesPageRoutingModule } from './basic-resources-routing.module';

import { BasicResourcesPage } from './basic-resources.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasicResourcesPageRoutingModule
  ],
  declarations: [BasicResourcesPage]
})
export class BasicResourcesPageModule {}
