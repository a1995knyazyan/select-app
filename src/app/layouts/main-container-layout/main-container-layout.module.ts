import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContainerLayoutComponent } from './main-container-layout.component';
import {MainContainerLayoutRouting} from "./main-container-layout.routing";
import {SelectInputModule} from "../../shared/ui-lib/select-input/select-input.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    MainContainerLayoutComponent
  ],
  imports: [
    CommonModule,
    MainContainerLayoutRouting,
    ReactiveFormsModule,
    SelectInputModule,
    FormsModule
  ],
  exports: [
    MainContainerLayoutComponent
  ]
})
export class MainContainerLayoutModule { }
