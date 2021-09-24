import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OncologyBooksPageRoutingModule } from './oncology-books-routing.module';

import { OncologyBooksPage } from './oncology-books.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OncologyBooksPageRoutingModule,
    MainPipe
  ],
  declarations: [OncologyBooksPage]
})
export class OncologyBooksPageModule {}
