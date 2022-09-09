import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private router: Router) { }
  username: any;
  password: any;
  ngOnInit(): void {
  }

  login() : void {
    if(this.username == 'admin' && this.password == 'pass' || this.username == 'admin1' && this.password == 'pass1'||this.username == 'ashu' && this.password == 'ashu' ||this.username == 'kaju' && this.password == 'kaju'){
     this.router.navigate(["faculty"]);
    }else {
      alert("Invalid credentials");
    }
  }
}
