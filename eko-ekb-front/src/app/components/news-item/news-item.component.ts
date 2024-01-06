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
        },
        {
          id: 2,
          title: 'Нужно ли убирать опавшие листья?',
          img: 'assets/news/listya.jpeg',
          date: '14.11.2023',
          route: 'fallen-listya'
        },
        {
          id: 3,
          title: 'Жара, засуха, наводнения',
          img: 'assets/news/zasuha.jpg',
          date: '16.11.2023',
          route: 'zasuha'
        },
        {
          id: 4,
          title: 'Как фейерверки загрязняют природу?',
          img: 'assets/news/firework.jpg',
          date: '20.11.2023',
          route: 'fireworks'
        },
        {
          id: 5,
          title: 'Как экологично упаковать подарки?',
          img: 'assets/news/podarok.jpg',
          date: '01.12.2023',
          route: 'gifts'
        },
      ]
  }
}
