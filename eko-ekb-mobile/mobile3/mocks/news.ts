export const news = [
  {
    id: 1,
    title: 'Полезные советы',
    items: [
      {
        id: 1,
        title: 'Нужны ли нам одноразовые бахилы',
        img: require('../assets/news/bahili.jpg'),
        date: '14.11.2023',
        route: 'bahili',
      },
      {
        id: 2,
        title: 'Нужно ли убирать опавшие листья?',
        img: require('../assets/news/listya.jpeg'),
        date: '14.11.2023',
        route: 'fallen-listya',
      },
      {
        id: 3,
        title: 'Жара, засуха, наводнения',
        img: require('../assets/news/zasuha.jpg'),
        date: '16.11.2023',
        route: 'zasuha',
      },
      {
        id: 4,
        title: 'Как фейерверки загрязняют природу?',
        img: require('../assets/news/firework.jpg'),
        date: '20.11.2023',
        route: 'fireworks',
      }
    ],
  },
  {
    id: 2,
    title: 'Новости мира',
    items: [
      {
        id: 1,
        title:
          'Перепады температуры в европейской части России связаны с изменением климата',
        img: require('../assets/news/temperature.jpg'),
        date: '18.12.2023',
        route: 'temperature',
      },
      {
        id: 2,
        title:
          'Экологи представили доклад о развитии крышных солнечных электростанций',
        img: require('../assets/news/doklad.jpg'),
        date: '07.12.2023',
        route: 'doklad',
      },
      {
        id: 3,
        title: 'Экологические итоги 2023 года',
        img: require('../assets/news/results.jpg'),
        date: '28.12.2023',
        route: 'results',
      },
      {
        id: 4,
        title: 'Почему Ленобласть проиграла короеду',
        img: require('../assets/news/koroed.jpg'),
        date: '25.12.2023',
        route: 'koroed',
      },
    ],
  },
  {
    id: 3,
    title: 'Новости Екатеринбурга',
    items: [
      {
        id: 1,
        title: 'В Екатеринбурге обнаружили огромную горящую яму',
        img: require('../assets/news/hell.png'),
        date: '01.12.2023',
        route: 'hell',
      },
      {
        id: 2,
        title:
          'Жители рассказали, что думают о гигантском мусорном заводе для Екатеринбурга',
        img: require('../assets/news/dermo.png'),
        date: '29.09.2023',
        route: 'dermo',
      },
      {
        id: 3,
        title: 'Под Екатеринбургом на покрышках сжигают кабанов и лосей',
        img: require('../assets/news/kaban.jpg'),
        date: '26.07.2023',
        route: 'burn-kaban',
      },
      {
        id: 4,
        title:
          'Во что превратился екатеринбургский пляж после обилия отдыхающих',
        img: require('../assets/news/ekb-beach.png'),
        date: '11.07.2023',
        route: 'ekb-beach',
      },
    ],
  },
];
