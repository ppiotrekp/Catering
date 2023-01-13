import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showHeader = true;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof  NavigationEnd) {
        if (val.url =='/home') {
          this.showHeader = false;
        }
      }
    })
  }
}
