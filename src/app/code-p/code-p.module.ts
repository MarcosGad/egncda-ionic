import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodePPageRoutingModule } from './code-p-routing.module';

import { CodePPage } from './code-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CodePPageRoutingModule
  ],
  declarations: [CodePPage]
})
export class CodePPageModule {}
