import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CvsAtherosclerosisPageRoutingModule } from './cvs-atherosclerosis-routing.module';

import { CvsAtherosclerosisPage } from './cvs-atherosclerosis.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CvsAtherosclerosisPageRoutingModule,
    MainPipe
  ],
  declarations: [CvsAtherosclerosisPage]
})
export class CvsAtherosclerosisPageModule {}
