import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DishInfoService {

  public id = new BehaviorSubject<any>([]);

  getId() {
    return this.id.asObservable();
}

  constructor() { }
}
