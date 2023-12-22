import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'eko-ekb-front';
  index = 1;
  readonly carouselItems = [
    'Вова гомо',
    'Вова гомо 2',
    'Вова гомо 3'
  ]
}
