import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainContainerLayoutComponent} from "./main-container-layout.component";

const routes: Routes = [
  {
    path: '',
    component: MainContainerLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainContainerLayoutRouting {}
