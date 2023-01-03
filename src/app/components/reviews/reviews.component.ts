import { Component, OnInit, Input } from '@angular/core';
import {DishService} from "../../service/dish.service";
import {Dish} from "../../service/dish";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  // @ts-ignore
  dish: Dish;

  // @ts-ignore
  @Input() data: string
  constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.getDish(this.data);
  }

  public getDish(dishId: string): void {
    this.dishService.getDish(dishId).subscribe(
      (response: Dish) => {
        console.log(response);
        this.dish = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  closeModal() {
    const modalBody = document.querySelector("#my-modal")
    // @ts-ignore
    modalBody.style.display = 'none';
    console.log(this.dish);
  }

}
