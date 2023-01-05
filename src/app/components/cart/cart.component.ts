import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../shared/shared.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
// @ts-ignore
  message: string;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.message = this.sharedService.getMessage();
    console.log(this.message);
  }

}
