import { Component, OnInit } from '@angular/core';
// @ts-ignore
import dishes from './dishes.json'
import {min} from "rxjs";

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  dishes:{id:number, image:string, name:string, typeOfCuisine:string,
    typeOfMeal:string, ingredients:Array<String>,
    limit:number, price:number, description:string
  }[] = dishes;
  amount: number = 0;
  constructor() { }

  increaseAmountOfDishes(id: number) {
    var selector = document.getElementById(id.toString())
    var selectorBottom = document.getElementById("amount")
    this.amount ++;
    // @ts-ignore
    selector.innerText = this.amount.toString();
    // @ts-ignore
    selectorBottom.innerText = this.amount.toString();
    console.log(this.amount);
  }

  decreaseAmountOfDishes(id: number) {
    var selector = document.getElementById(id.toString())
    var selectorBottom = document.getElementById("amount")
    this.amount --;
    // @ts-ignore
    selector.innerText = this.amount.toString();
    // @ts-ignore
    selectorBottom.innerText = this.amount.toString();
  }

  // arr: number[] = [] ;
  // minValue() {
  //   for (let dish of this.dishes.values()) {
  //     this.arr.push(dish.price)
  //   }
  //   console.log(Math.min(...this.arr));
  //   return Math.min(...this.arr);
  // }
  //
  // maxValue() {
  //   for (let dish of this.dishes.values()) {
  //     this.arr.push(dish.price)
  //   }
  //   // @ts-ignore
  //   return Math.max(...this.arr);
  // }




  ngOnInit(): void {

  }



}
