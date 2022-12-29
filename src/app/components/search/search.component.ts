import { Component, OnInit } from '@angular/core';
import {Meal} from "../../service/meal";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // @ts-ignore
  meals: Meal[]
  constructor() { }

  ngOnInit(): void {
  }

}
