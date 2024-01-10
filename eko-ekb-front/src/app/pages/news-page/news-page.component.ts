import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.less']
})
export class NewsPageComponent implements OnInit{
  newNews = []
  // BOBA СЮДА ДОБАВИТЬ НОВЫЕ НОВОСТИ
  ngOnInit() {
    this.newNews = [
      {
        id: 1,
        title: 'Полезные советы',
        items: [
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
      },
      {
        id: 2,
        title: 'Новости мира',
        items: [
          {
            id: 1,
            title: 'Перепады температуры в европейской части России связаны с изменением климата',
            img: 'assets/news/temperature.jpg',
            date: '18.12.2023',
            route: 'temperature'
          },
          {
            id: 2,
            title: 'Экологи представили доклад о развитии крышных солнечных электростанций',
            img: 'assets/news/doklad.jpg',
            date: '07.12.2023',
            route: 'doklad'
          },
          {
            id: 3,
            title: 'Экологические итоги 2023 года',
            img: 'assets/news/results.jpg',
            date: '28.12.2023',
            route: 'results'
          },
          {
            id: 4,
            title: 'Почему Ленобласть проиграла короеду',
            img: 'assets/news/koroed.jpg',
            date: '25.12.2023',
            route: 'koroed'
          },
          {
            id: 5,
            title: 'COP28: изменение климата требует решительных действий',
            img: 'assets/news/cop.jpg',
            date: '30.11.2023',
            route: 'cop28'
          },
        ]
      },
      {
        id: 3,
        title: 'Новости Екатеринбурга',
        items: [
          {
            id: 1,
            title: 'В Екатеринбурге обнаружили огромную горящую яму',
            img: 'assets/news/hell.png',
            date: '01.12.2023',
            route: 'hell'
          },
          {
            id: 2,
            title: 'Жители рассказали, что думают о гигантском мусорном заводе для Екатеринбурга',
            img: 'assets/news/dermo.png',
            date: '29.09.2023',
            route: 'dermo'
          },
          {
            id: 3,
            title: 'Под Екатеринбургом на покрышках сжигают кабанов и лосей',
            img: 'assets/news/kaban.jpg',
            date: '26.07.2023',
            route: 'burn-kaban'
          },
          {
            id: 4,
            title: 'Во что превратился екатеринбургский пляж после обилия отдыхающих',
            img: 'assets/news/ekb-beach.png',
            date: '11.07.2023',
            route: 'ekb-beach'
          },
          {
            id: 5,
            title: 'Такое случается раз в 10 лет! Урал вот-вот накроет нашествие бабочек-вредителей',
            img: 'assets/news/butterflies.png',
            date: '27.05.2023',
            route: 'butterflies'
          },
        ]
      }
    ]
  }

}
