import { forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SelectInputComponent } from "./select-input.component";
import {ScrollingModule} from '@angular/cdk/scrolling';
import {NgxMatSelectSearchModule} from "ngx-mat-select-search";


@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
    ScrollingModule,
    NgxMatSelectSearchModule,
  ],
  declarations: [SelectInputComponent],
  exports: [SelectInputComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectInputComponent),
      multi: true
    }
  ]
})
export class SelectInputModule {}
