import { Component, OnInit } from '@angular/core';
// import dishes from './dishes.json'
import {Dish} from "../../service/dish";
import {DishService} from "../../service/dish.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  // @ts-ignore
  public dishes: Dish[];


  // dishes:{id:number, image:string, name:string, typeOfCuisine:string,
  //   typeOfMeal:string, ingredients:Array<String>,
  //   limit:number, price:number, description:string
  // }[] = dishes;
  amount: number = 0;
  constructor(private dishService: DishService) { }

  increaseAmountOfDishes(id: string) {
    var selector = document.getElementById(id.toString())
    var selectorBottom = document.querySelector(".amount")
    this.amount ++;
    // @ts-ignore
    selector.innerText = this.amount.toString();
    // @ts-ignore
    selectorBottom.innerText = this.amount.toString();
    console.log(this.amount);
  }

  decreaseAmountOfDishes(id: string) {
    var selector = document.getElementById(id.toString())
    var selectorBottom = document.querySelector(".amount")
    this.amount --;
    // @ts-ignore
    selector.innerText = this.amount.toString();
    // @ts-ignore
    selectorBottom.innerText = this.amount.toString();
  }

  arr: number[] = [] ;
  minValue() {
    for (let dish of this.dishes.values()) {
      this.arr.push(dish.price)
    }
    console.log(Math.min(...this.arr));
    return Math.min(...this.arr);
  }

  maxValue() {
    for (let dish of this.dishes.values()) {
      this.arr.push(dish.price);
    }
    // @ts-ignore
    return Math.max(...this.arr);
  }

  removeById(id: string) {
    var row = document.querySelector("#dish" + id.toString());
    // @ts-ignore
    row.remove();
  }

  addReviewsComponent() {

  }


  ngOnInit(): void {
    this.getDishes();
  }

  public getDishes(): void {
    this.dishService.getDishes().subscribe(
      (response: Dish[]) => {
        this.dishes = response;
        console.log(this.dishes);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteDish(dishId: string): void {
    this.dishService.deleteDish(dishId).subscribe(
      (response: void) => {
        console.log(response);
        this.getDishes();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }




}
