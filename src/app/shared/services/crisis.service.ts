import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Crisis} from "../models/crisis.model";
import {CRISES} from "../mocks/mock-crises";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CrisisService {

  constructor() { }

  getCrises(): Observable<Crisis[]> {
    return of(CRISES)
  }

  getCrisis(crisisId: string): Observable<Crisis> {
    return this.getCrises().pipe(
      map((crises) => crises.find(crisis => crisis.id === parseInt(crisisId))!)
    )
  }
}
