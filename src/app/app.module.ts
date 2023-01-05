import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DishesComponent } from './components/dishes/dishes.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { SearchComponent } from './components/search/search.component';
import {HeaderComponent} from "./components/header/header.component";
import {RouterModule, Routes} from "@angular/router";
import { CartComponent } from './components/cart/cart.component';

const appRoute: Routes = [
  {path: 'dishes', component:DishesComponent},
  {path: 'cart', component:CartComponent}
]

@NgModule({
    declarations: [
        AppComponent,
        DishesComponent,
        ReviewsComponent,
        SearchComponent,
        HeaderComponent,
        CartComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
