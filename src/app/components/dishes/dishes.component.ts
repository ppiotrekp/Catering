import { Component, OnInit } from '@angular/core';
// @ts-ignore
import dishes from './dishes.json'

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
    this.amount ++;
    // @ts-ignore
    selector.innerText = this.amount.toString();
  }

  decreaseAmountOfDishes(id: number) {
    var selector = document.getElementById(id.toString())
    this.amount --;
    // @ts-ignore
    selector.innerText = this.amount.toString();
  }

  ngOnInit(): void {

    // const plusButton = document.getElementsByClassName("fas fa-plus-square");
    // plusButton[0].addEventListener('click', updateAmountOfDishes);
  }



}
