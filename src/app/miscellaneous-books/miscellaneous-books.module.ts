import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiscellaneousBooksPageRoutingModule } from './miscellaneous-books-routing.module';

import { MiscellaneousBooksPage } from './miscellaneous-books.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiscellaneousBooksPageRoutingModule,
    MainPipe
  ],
  declarations: [MiscellaneousBooksPage]
})
export class MiscellaneousBooksPageModule {}
