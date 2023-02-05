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
import { FilterPipe } from './shared/filter.pipe';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import {httpInterceptorProviders} from "./http.request.interceptor";
import { GuestComponent } from './components/guest/guest.component';
import { ManagerComponent } from './components/manager/manager.component';
import { UpdateDishComponent } from './components/update-dish/update-dish.component';
import { AdminComponent } from './components/admin/admin.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import {HistoryComponent} from "./components/history/history.component";
import {AuthGuard} from "./guard/auth.guard";


const appRoute: Routes = [
  {path : '',redirectTo : 'home',pathMatch : 'full'},
  {path: 'dishes', component:DishesComponent},
  {path: 'cart', component:CartComponent, canActivate: [AuthGuard]},
  {path: 'home', component:HomeComponent},
  {path: 'dishes/:id', component:ReviewsComponent, canActivate: [AuthGuard]},
  {path: 'signup', component: SignUpComponent },
  {path: 'login', component: SignInComponent },
  {path: 'guest/dishes', component:GuestComponent},
  {path: 'manager/dishes', component:ManagerComponent, canActivate: [AuthGuard] },
  {path: 'users', component:AdminComponent, canActivate: [AuthGuard]},
  {path: "history", component:HistoryComponent, canActivate: [AuthGuard]},

]

@NgModule({
    declarations: [
        AppComponent,
        DishesComponent,
        ReviewsComponent,
        SearchComponent,
        HeaderComponent,
        CartComponent,
        FilterPipe,
        HomeComponent,
        SignUpComponent,
        SignInComponent,
        GuestComponent,
        ManagerComponent,
        UpdateDishComponent,
        AdminComponent,
        CheckoutComponent,
        HistoryComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
