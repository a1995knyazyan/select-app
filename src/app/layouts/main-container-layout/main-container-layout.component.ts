import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {SelectDataI} from "../../shared/interfaces/select-data.interface";
import {SelectionDataService} from "../../shared/services/selection-data.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-main-container-layout',
  templateUrl: './main-container-layout.component.html',
  styleUrls: ['./main-container-layout.component.scss']
})
export class MainContainerLayoutComponent implements OnInit {
  items$: Observable<SelectDataI[]> = this.selectionDataService.selectionData$;

  selectFormGroup: FormGroup = this.formBuilder.group({
    selectControl1: new FormControl(null)
  });
  selectControl2: FormControl = new FormControl(null);
  selectedValue: number = 0;

  constructor(
    private selectionDataService: SelectionDataService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.fetchSelectionData();
  }

  searchInputValueChange(keyword: string): void {
    console.log(keyword);
  }

  selectItemEventHandler(): void {
    console.log('formControlName usage value', this.selectFormGroup.controls['selectControl1'].value);
    console.log('formControl usage value', this.selectControl2.value);
  }

  fetchSelectionData(): void {
    // backend imitation
    this.selectionDataService.selectionData = [
      {
        name: 'Option1',
        id: 1
      },
      {
        name: 'Option2',
        id: 2
      },
      {
        name: 'Option3',
        id: 3
      },
      {
        name: 'Option4',
        id: 4
      },
      {
        name: 'Option5',
        id: 5
      },
      {
        name: 'Option6',
        id: 6
      }
    ];
  }
}
