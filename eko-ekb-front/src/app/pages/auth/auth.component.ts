import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthSerivce} from "./auth.service";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Token} from "../../token";


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent {
  constructor(private http: HttpClient, private readonly authService: AuthSerivce, private readonly router: Router) {
  }
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  body = new URLSearchParams();

  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };

  submit(): void {
    this.body.set('username', this.form.get('username').value,);
    this.body.set('password', this.form.get('password').value,);
    this.http.post<Token>('http://51.250.28.250:8080/login', this.body.toString(), this.options)
      .subscribe(res => {
        localStorage.setItem('token', res.access_token);
        localStorage.setItem('isAuth', 'true');
        this.router.navigateByUrl('/');
      });
  }
}
