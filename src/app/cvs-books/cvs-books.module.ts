import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CvsBooksPageRoutingModule } from './cvs-books-routing.module';

import { CvsBooksPage } from './cvs-books.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CvsBooksPageRoutingModule,
    MainPipe
  ],
  declarations: [CvsBooksPage]
})
export class CvsBooksPageModule {}
