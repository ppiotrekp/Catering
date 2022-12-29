import { Component, OnInit } from '@angular/core';
// import dishes from './dishes.json'
import {Dish} from "../../service/dish";
import {DishService} from "../../service/dish.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  // @ts-ignore
  public dishes: Dish[];

  display = false;

  onPress() {
    //this.display = true;

    //To toggle the component
    this.display = !this.display;
  }

  amount: number = 0;
  newIngredient: string = '';
  allIngredients : string[] = [];
  constructor(private dishService: DishService) {
  }

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

  public getDish(dishId: string): void {
    this.dishService.getDish(dishId).subscribe(
      (response: Dish) => {
        console.log(response);
        this.getDish(dishId);
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

  public addDish(addForm: NgForm): void {
    // @ts-ignore
    let none = document.querySelector("#my-modal").style.display = 'none';
    this.dishService.addDish(addForm.value).subscribe(
      (response: Dish) => {
        console.log(response);
        this.getDishes();
        // this.allIngredients.push(this.newIngredient);
        // this.newIngredient = '';
        addForm.reset();
        none;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
        none;
      }
    );
  }

  openModal() {
    const modalBody = document.querySelector("#my-modal")
    // @ts-ignore
    modalBody.style.display = 'block';
  }

  closeModal() {
    const modalBody = document.querySelector("#my-modal")
    // @ts-ignore
    modalBody.style.display = 'none';
  }

}
