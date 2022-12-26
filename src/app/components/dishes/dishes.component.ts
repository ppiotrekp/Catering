import { Component, OnInit } from '@angular/core';
// @ts-ignore
import dishes from './dishes.json'

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  dishes:{name:String, typeOfCuisine:String, typeOfMeal:String, Ingredients:Array<String>}[] = dishes;
  constructor() { }

  ngOnInit(): void {
  }

}
