import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllNews } from 'src/shared/mocks/news';
import { iNews } from 'src/shared/models/INews';

@Component({
  selector: 'app-news-item-page',
  templateUrl: './news-item-page.component.html',
  styleUrls: ['./news-item-page.component.less']
})
export class NewsItemPageComponent implements OnInit{
  id: number;
  currentNews!: iNews | undefined;
    constructor(private activateRoute: ActivatedRoute){
          
        this.id = parseInt(activateRoute.snapshot.params["id"], 10);
    }
  
  ngOnInit(): void {
    this.currentNews = AllNews.find(el => el.id === this.id);
  }
}
