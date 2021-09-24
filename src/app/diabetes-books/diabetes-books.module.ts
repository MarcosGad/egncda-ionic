import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiabetesBooksPageRoutingModule } from './diabetes-books-routing.module';

import { DiabetesBooksPage } from './diabetes-books.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiabetesBooksPageRoutingModule,
    MainPipe
  ],
  declarations: [DiabetesBooksPage]
})
export class DiabetesBooksPageModule {}
