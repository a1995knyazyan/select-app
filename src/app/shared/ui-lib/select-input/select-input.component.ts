import {AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ControlValueAccessor, FormControl, NgControl} from '@angular/forms';
import {SelectDataI} from "../../interfaces/select-data.interface";

@Component({
  selector: 'select-input',
  templateUrl: 'select-input.component.html',
  styleUrls: ['select-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectInputComponent implements ControlValueAccessor, AfterViewInit {
  @Input() items: SelectDataI[] = [];
  @Input() visibleItemsCount: number = 5;

  @Output() valueChangedEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() searchValueChangeEvent: EventEmitter<string> = new EventEmitter<string>();

  public formControl = new FormControl();
  label: string = 'Select Label';
  _value!: number;
  options!: SelectDataI[];

  constructor(public ngControl: NgControl) {
    ngControl.valueAccessor = this;
  }

  ngAfterViewInit(): void {
    this.formControl = this.ngControl.control as FormControl;
  }

  valueChanged(value: number): void {
    this.valueChangedEvent.emit(value);
  }

  searchValueChanged(keyword: string): void {
    if (keyword?.trim()) {
      this.searchValueChangeEvent.emit(keyword);
    }
  }

  clearInputValue(): void {
    this.formControl.setValue(null);
    // make parent form dirty
    if (this.formControl.parent) {
      this.formControl.parent.markAsDirty();
    }
    this.valueChangedEvent.emit(this.formControl.value);
  }

  writeValue(value: any): void {
    if (value !== undefined) {
      this._value = value;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouch = fn;
  }

  propagateChange!: (_: any) => {};
  propagateTouch!: (_: any) => {};

  // filterValues(searchKeyword: string): void {
  //   if (this.options) {
  //     this.options = this.data?.values.filter((item) => item.displayName.toLowerCase().includes(searchKeyword.toLowerCase()))!;
  //   }
  // }
}
