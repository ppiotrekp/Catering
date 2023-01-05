import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DishesComponent } from './components/dishes/dishes.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { SearchComponent } from './components/search/search.component';
import {HeaderComponent} from "./components/header/header.component";



@NgModule({
    declarations: [
        AppComponent,
        DishesComponent,
        ReviewsComponent,
        SearchComponent,
        HeaderComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
