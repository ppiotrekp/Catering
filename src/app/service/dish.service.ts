
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Dish} from "../../dish/dish";

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

  public getDishesWithPages(page: number) {
    return this.http.get<Dish[]>(`${this.apiUrl}/dishes/page?page=` + page)
  }

  public getDish(dishId: string): Observable<Dish> {
    return this.http.get<Dish>(`${this.apiUrl}/dish/${dishId}`);
  }

  public deleteDish(dishId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/dish/${dishId}`);
  }

  public addDish(dish: Dish): Observable<Dish> {
    return this.http.post<Dish>(`${this.apiUrl}/dish`, dish);
  }

}
