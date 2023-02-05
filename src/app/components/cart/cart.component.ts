import { Component, OnInit } from '@angular/core';
import {CartService} from "../../service/cart.service";
import {OrderService} from "../../service/order.service";
import {Order} from "../../order/order";
import {Dish} from "../../../dish/dish";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public dishes : any = [];
  public order!: Order;
  public grandTotal !: number;
  // @ts-ignore
  // public order: a;
  userId='';
  id='';
  name='';
  price='';
  amount='';
  constructor(private cartService : CartService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res=>{
        this.dishes = res;
        this.grandTotal = this.cartService.getTotalPrice();
      })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

  buyDishes() {
    this.orderService.fillAnOrder(this.order).subscribe(
      (response: Order) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }
}
