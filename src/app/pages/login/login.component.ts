import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  username: any;
  password: any;
  ngOnInit(): void {
  }

  login() : void {
    if(this.username == 'admin' && this.password == 'pass' || this.username == 'admin1' && this.password == 'pass1'||this.username == 'ashu' && this.password == 'ashu' ||this.username == 'kaju' && this.password == 'kaju'){
     this.router.navigate(["principal"]);
    }else {
      alert("Invalid credentials");
    }
  }
}
