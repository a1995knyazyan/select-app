import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {SelectDataI} from "../../shared/interfaces/select-data.interface";
import {SelectionDataService} from "../../shared/services/selection-data.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-main-container-layout',
  templateUrl: './main-container-layout.component.html',
  styleUrls: ['./main-container-layout.component.scss']
})
export class MainContainerLayoutComponent implements OnInit {
  items$: Observable<SelectDataI[]> = this.selectionDataService.selectionData$;

  selectFormGroup!: FormGroup;
  selectControl2: FormControl = new FormControl([]);
  searchInputValue: number = 0;

  constructor(
    private selectionDataService: SelectionDataService
  ) {}

  ngOnInit(): void {
    this.fetchSelectionData();
    this.initializeForm();
  }

  initializeForm(): void {
    this.selectFormGroup = new FormGroup({
      selectControl1: new FormControl([])
    });
  }

  searchInputValueChange(event: any): void {
    debugger;
    console.log(event);
  }

  selectItemEventHandler(selectedItemId: number): void {
    console.log('selected item', selectedItemId);
    console.log(this.selectFormGroup);
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
