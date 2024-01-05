import { Component, OnInit } from '@angular/core';
import { AllNews } from 'src/shared/mocks/news';
import { iNews } from 'src/shared/models/INews';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.less']
})
export class NewsItemComponent implements OnInit{
  newNews;
  news: iNews[] = AllNews;
  title = this.news[0].tag;

  ngOnInit(): void {
      this.newNews = [
        {
          id: 1,
          title: 'Нужны ли нам одноразовые бахилы',
          img: 'assets/news/bahili.jpg',
          date: '14.11.2023',
          route: 'bahili'
        }
      ]
  }
}
