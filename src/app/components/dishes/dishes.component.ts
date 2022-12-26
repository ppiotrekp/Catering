import { Component, OnInit } from '@angular/core';
// @ts-ignore
import dishes from './dishes.json'

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  dishes:{image:String, name:String, typeOfCuisine:String,
    typeOfMeal:String, ingredients:Array<String>,
    limit:number, price:number, description:String
  }[] = dishes;
  constructor() { }

  ngOnInit(): void {
  }



}
