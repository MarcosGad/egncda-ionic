import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPPageRoutingModule } from './register-p-routing.module';

import { RegisterPPage } from './register-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterPPage]
})
export class RegisterPPageModule {}
