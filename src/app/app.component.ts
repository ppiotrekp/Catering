import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {StorageService} from "./service/storage.service";
import {LoginService} from "./service/login.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showHeader = true;
  isLoggedIn = false;
  username?: string;

  constructor(private router: Router, private storageService: StorageService, private loginService: LoginService) {
    router.events.subscribe((val) => {
      if (val instanceof  NavigationEnd) {
        if (val.url =='/home' ||
          val.url == "/signup" ||
          val.url == "/login"
          || val.url == "/guest/dishes"){
          this.showHeader = false;
        }
      }
    })
  }

  // ngOnInit(): void {
  //   this.isLoggedIn = this.storageService.isLoggedIn();
  //   console.log(this.isLoggedIn);
  //
  //   if (this.isLoggedIn) {
  //     const user = this.storageService.getUser();
  //     this.username = user.sub;
  //     console.log("us" + this.username)
  //   }
  // }
}
