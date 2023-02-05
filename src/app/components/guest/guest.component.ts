import { Component, OnInit } from '@angular/core';
import {Dish} from "../../../dish/dish";
import {DishService} from "../../service/dish.service";
import {CartService} from "../../service/cart.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  // @ts-ignore
  public dishes: Dish[];
  amount: number = 0;
  sentId: string = '';
  page: number = 0;
  public filterCategory : any
  searchKey:string ="";

  constructor(private dishService: DishService,
              private cartService: CartService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }

  filter(category:string){
    this.filterCategory = this.dishes
      .filter((a:any)=>{
        if(a.category == category || category==''){
          return a;
        }
      })
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
    this.getDishesForGuests();
  }

  previousPage() {
    this.page--;
    this.getDishesForGuests();
  }

  ngOnInit(): void {
    this.getDishesForGuests();
    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  public getDishesForGuests() {
    this.dishService.getDishesForGuests(this.page).subscribe(
      (response: Dish[]) => {
        this.dishes = response;
        this.filterCategory = response;
        this.dishes.forEach((a:any) => {
          Object.assign(a,{quantity:1,total:a.price});
        });
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
