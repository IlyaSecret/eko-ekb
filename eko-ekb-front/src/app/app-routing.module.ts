import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {NewsPageComponent} from "./pages/news-page/news-page.component";
import {AboutUsPageComponent} from "./pages/about-us-page/about-us-page.component";
import {ForPartnersPageComponent} from "./pages/for-partners-page/for-partners-page.component";
import { NewsItemPageComponent } from './pages/news-item-page/news-item-page.component';
import { BahiliComponent } from './pages/news/bahili/bahili.component';
import { FallenListyaComponent } from './pages/news/fallen-listya/fallen-listya.component';
import { ZasuhaComponent } from './pages/news/zasuha/zasuha.component';
import { FireworksComponent } from './pages/news/fireworks/fireworks.component';
import { GiftsComponent } from './pages/news/gifts/gifts.component';
import { TemperatureComponent } from './pages/news/temperature/temperature.component';
import { DokladComponent } from './pages/news/doklad/doklad.component';
import { ResultsComponent } from './pages/news/results/results.component';
import { KoroedComponent } from './pages/news/koroed/koroed.component';
import { Cop28Component } from './pages/news/cop28/cop28.component';
import { HellComponent } from './pages/news/hell/hell.component';
import { DermoComponent } from './pages/news/dermo/dermo.component';
import { BurnKabanComponent } from './pages/news/burn-kaban/burn-kaban.component';
import { EkbBeachComponent } from './pages/news/ekb-beach/ekb-beach.component';
import { ButterfliesComponent } from './pages/news/butterflies/butterflies.component';


// BOBA ЗДЕСЬ ДОБАВИТЬ РОУТЫ НА НОВОСТИ (ТО ЧТО В ОБЪЕКТЕ ПОД НАЗВАНИЕМ route)
const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'news', component: NewsPageComponent},
  {path: 'news/:id', component: NewsItemPageComponent},
  {path: 'about-us', component: AboutUsPageComponent},
  { path: 'partners', component: ForPartnersPageComponent },
  { path: 'bahili', component: BahiliComponent },
  { path: 'fallen-listya', component: FallenListyaComponent},
  { path: 'zasuha', component: ZasuhaComponent},
  { path: 'fireworks', component: FireworksComponent},
  { path: 'gifts', component: GiftsComponent },
  { path: 'temperature', component: TemperatureComponent },
  { path: 'doklad', component: DokladComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'koroed', component: KoroedComponent },
  { path: 'cop28', component: Cop28Component },
  { path: 'hell', component: HellComponent },
  { path: 'dermo', component: DermoComponent },
  { path: 'burn-kaban', component: BurnKabanComponent },
  { path: 'ekb-beach', component: EkbBeachComponent },
  { path: 'butterflies', component: ButterfliesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
