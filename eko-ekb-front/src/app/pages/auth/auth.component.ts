import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthSerivce} from "./auth.serivce";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent {
  constructor(private readonly authService: AuthSerivce, private readonly router: Router) {
  }
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  submit(): void {
      const data = {
        username: this.form.get('username').value,
        password: this.form.get('password').value
      }
      this.authService.login(data).subscribe(() => {
        this.router.navigate(['/'])
        localStorage.setItem('isAuth', 'true')
      });
  }
}
