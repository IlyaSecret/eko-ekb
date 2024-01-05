import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {NewsPageComponent} from "./pages/news-page/news-page.component";
import {AboutUsPageComponent} from "./pages/about-us-page/about-us-page.component";
import {ForPartnersPageComponent} from "./pages/for-partners-page/for-partners-page.component";
import { NewsItemPageComponent } from './pages/news-item-page/news-item-page.component';
import { BahiliComponent } from './pages/news/bahili/bahili.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'news', component: NewsPageComponent},
  {path: 'news/:id', component: NewsItemPageComponent},
  {path: 'about-us', component: AboutUsPageComponent},
  { path: 'partners', component: ForPartnersPageComponent },
  {path: 'bahili', component: BahiliComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
