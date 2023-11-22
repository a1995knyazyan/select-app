import {AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import {ControlValueAccessor, FormControl, NgControl} from '@angular/forms';
import {SelectDataI} from "../../interfaces/select-data.interface";
import { InjectionToken } from '@angular/core';

export const VISIBLE_ITEMS_COUNT = new InjectionToken<number>('visibleItemsCount');

@Component({
  selector: 'select-input',
  templateUrl: 'select-input.component.html',
  styleUrls: ['select-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: VISIBLE_ITEMS_COUNT, useValue: 5 }]
})
export class SelectInputComponent implements ControlValueAccessor, AfterViewInit {
  @Input() items: SelectDataI[] = [];
  @Input() visibleItemsCount!: number;

  @Output() valueChangedEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() searchValueChangeEvent: EventEmitter<string> = new EventEmitter<string>();

  public formControl = new FormControl();
  label: string = 'Select Label';
  searchInputValue: string = '';
  _value: number | null = null;
  options!: SelectDataI[];

  constructor(
    public ngControl: NgControl,
    @Inject(VISIBLE_ITEMS_COUNT) private defaultItemsCount: number
  ) {
    ngControl.valueAccessor = this;
    this.visibleItemsCount = this.visibleItemsCount || this.defaultItemsCount;
  }

  get value(): number | null {
    return this._value;
  }

  set value(val: number | null) {
    if (val !== null) {
      if (this.propagateChange) {
        this.propagateChange(val);
      }
    } else {
      this._value = null;
    }
  }

  ngAfterViewInit(): void {
    this.formControl = this.ngControl.control as FormControl;
    this.setOptions();
  }

  valueChanged(value: number): void {
    this.valueChangedEvent.emit(value);
    this.value = value;
  }

  searchValueChanged(keyword: string): void {
      this.searchValueChangeEvent.emit(keyword);
      this.filterItems(keyword);
  }

  setOptions(): void {
    if (this.items) {
      this.options = [...this.items];
    }
  }

  filterItems(searchKeyword: string): void {
    if (this.options) {
      this.options = this.items.filter((item) => item.name.toLowerCase().includes(searchKeyword.toLowerCase()))!;
    }
  }

  writeValue(value: any): void {
    if (value !== undefined) {
      this.value = value;
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
}
