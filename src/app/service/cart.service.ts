import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Dish} from "../../dish/dish";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  counter: number = 0;

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(dish : Dish){
    // if (this.cartItemList.includes(dish)) {
    //   this.cartItemList.remove(dish);
    //   this.cartItemList.push(dish);
    // }
    this.cartItemList.push(dish);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(dish: Dish){
    // this.cartItemList.map((a:any, index:any)=>{
      // if(dish.id=== a.id){
        this.cartItemList.splice(this.cartItemList.indexOf(dish, 1));
      // }
      console.log(dish);
    // })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
