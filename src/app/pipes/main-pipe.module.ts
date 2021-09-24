import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {SlugifyPipe} from "./slugify.pipe";
import {SafePipe} from "./safe.pipe";

@NgModule({
  declarations:[SlugifyPipe, SafePipe],
  imports:[CommonModule],
  exports:[SlugifyPipe, SafePipe] 
})

export class MainPipe{}