import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import {TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER, TuiButtonModule} from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  TuiCarouselModule,
  TuiInputModule,
  TuiInputSliderModule,
  TuiIslandModule,
  TuiPaginationModule, TuiTabsModule
} from "@taiga-ui/kit";
import {CommonModule} from "@angular/common";
import {MarkersPageModule} from "./map/markers-page.module";
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { ForPartnersPageComponent } from './pages/for-partners-page/for-partners-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    NewsPageComponent,
    AboutUsPageComponent,
    ForPartnersPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiInputSliderModule,
    TuiCarouselModule,
    TuiButtonModule,
    TuiIslandModule,
    CommonModule,
    TuiPaginationModule,
    TuiInputModule,
    MarkersPageModule,
    TuiTabsModule
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
