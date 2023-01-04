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
  amount: number = 0;
  display = false;
  sentId: string = '';
  page: number = 0;

  constructor(private dishService: DishService) {
  }

  increaseAmountOfDishes(id: string) {
    var selector = document.getElementById(id.toString())
    var selectorBottom = document.querySelector(".amount")
    // @ts-ignore
    selectorBottom.innerText = this.amount.toString();
    for (var dish of this.dishes) {
      if (dish.id === id) {
        dish.amount++;
        // @ts-ignore
        selector.innerText = dish.amount.toString();
        this.amount ++;
        // @ts-ignore
        selectorBottom.innerText = this.amount.toString();
      }
    }

  }

  decreaseAmountOfDishes(id: string) {
    var selector = document.getElementById(id.toString())
    var selectorBottom = document.querySelector(".amount")
    // @ts-ignore
    selectorBottom.innerText = this.amount.toString();
    for (var dish of this.dishes) {
      if (dish.id === id) {
        dish.amount--;
        // @ts-ignore
        selector.innerText = dish.amount.toString();
        this.amount --;
        // @ts-ignore
        selectorBottom.innerText = this.amount.toString();
      }
    }
  }

  arr: number[] = [] ;
  minValue() {
    for (let dish of this.dishes.values()) {
      this.arr.push(dish.price)
    }
    return Math.min(...this.arr);
  }

  maxValue() {
    for (let dish of this.dishes.values()) {
      this.arr.push(dish.price);
    }
    return Math.max(...this.arr);
  }

  nextPage() {
    this.page++;
    this.getDishesWithPages();
  }

  previousPage() {
    this.page--;
    this.getDishesWithPages();
  }

  ngOnInit(): void {
    this.getDishesWithPages();
  }

  public getDishes(): void {
    // this.dishService.getDishes().subscribe(
    //   (response: Dish[]) => {
    //     this.dishes = response;
    //     console.log(this.dishes);
    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message);
    //   }
    // );
  }

  public getDishesWithPages() {
    this.dishService.getDishesWithPages(this.page).subscribe(
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

  openDishInfo(id: string) {
    this.sentId = id;
    this.display = !this.display;
  }
}
