import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  get isAuth(): boolean {
    return localStorage.getItem('isAuth') === 'true'
  }
}
