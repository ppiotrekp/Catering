import { Component, OnInit } from '@angular/core';
import {User} from "../../user/user";
import {RegisterService} from "../../service/register.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user:User =new User();
  // @ts-ignore
  userError: User;
  isCreated:boolean = false;
  userExists:boolean=false;
  passwordsDifferent:boolean = true;


  constructor(private registerService: RegisterService) { }

  register(){
    this.comparePasswords();
    // if (this.passwordsDifferent === true) {
      this.registerService.registerUser(this.user).subscribe(data=>{
        this.user = new User();
        this.isCreated = true;

      },error=> {
        this.userError=error.error;
        this.isCreated = false;
      });
    // }
  }

  comparePasswords() {
    var password = (document.getElementById("password") as HTMLInputElement).value;
    var repeatPassword = (document.getElementById("password1") as HTMLInputElement).value;
    if (password != repeatPassword) {
      this.passwordsDifferent = false;
    }

  }

  ngOnInit(): void {
  }

}
