import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursesRegistrationPageRoutingModule } from './courses-registration-routing.module';

import { CoursesRegistrationPage } from './courses-registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CoursesRegistrationPageRoutingModule
  ],
  declarations: [CoursesRegistrationPage]
})
export class CoursesRegistrationPageModule {}
