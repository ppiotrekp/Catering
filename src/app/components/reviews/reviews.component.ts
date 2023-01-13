import { Component, OnInit, Input } from '@angular/core';
import {DishService} from "../../service/dish.service";
import {Dish} from "../../service/dish";
import {HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  // @ts-ignore
  dish: Dish;

  constructor(private dishService: DishService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    // @ts-ignore
    this.getDish(this.route.snapshot.params.id);
    // console.log(this.route.snapshot.params.id)
  }

  public getDish(id: string): void {
    this.dishService.getDish(id).subscribe(
      (response: Dish) => {
        console.log(response);
        this.dish = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
