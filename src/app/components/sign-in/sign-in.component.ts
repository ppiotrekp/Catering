import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../service/login.service";
import {Data, Router} from "@angular/router";
import {StorageService} from "../../service/storage.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  email = '';
  password = '';
  invalidLogin = false;
  isLoggedIn = false;

  constructor(private loginService: LoginService, private router: Router, private storageService: StorageService) {
  }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn() && this.invalidLogin) {
      this.isLoggedIn = true;
    }
  }

  login() {
    let payload = {email: this.email, password: this.password};
    this.loginService.login(payload).subscribe(data => {
        this.router.navigate(['/dishes']);
        this.storageService.saveUser(data);
        this.invalidLogin = false;
        this.isLoggedIn = true;
        console.log(data)
        // window.location.reload();
      },
      error => {
        this.invalidLogin = true;
        alert("bad credentials")
      })
  }





}

