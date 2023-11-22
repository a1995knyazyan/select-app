import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {SelectDataI} from "../interfaces/select-data.interface";

@Injectable({
  providedIn: 'root'
})
export class SelectionDataService {
  private readonly _selectionData = new BehaviorSubject<SelectDataI[]>([]);
  public readonly selectionData$ = this._selectionData.asObservable();

  set selectionData(data: SelectDataI[]) {
    this._selectionData.next(data);
  }

  get selectionData(): SelectDataI[] {
    return this._selectionData.getValue();
  }
}
