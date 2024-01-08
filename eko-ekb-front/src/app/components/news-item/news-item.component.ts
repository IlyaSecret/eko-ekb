import { Component, Input, OnInit } from '@angular/core';
import { AllNews } from 'src/shared/mocks/news';
import { iNews } from 'src/shared/models/INews';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.less']
})
export class NewsItemComponent{
  @Input() news
}
