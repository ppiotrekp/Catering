
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Dish} from "./dish";

@Injectable({
  providedIn: 'root'
})
export class DishService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(`${this.apiUrl}/dishes`);
  }

  public deleteDish(dishId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/dish/${dishId}`);
  }

}
