import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespiratoryBooksPageRoutingModule } from './respiratory-books-routing.module';

import { RespiratoryBooksPage } from './respiratory-books.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespiratoryBooksPageRoutingModule,
    MainPipe
  ],
  declarations: [RespiratoryBooksPage]
})
export class RespiratoryBooksPageModule {}
