import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiButtonModule,
  TuiHintModule, TuiErrorModule
} from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {JWT_OPTIONS, JwtModule} from "@auth0/angular-jwt";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  TuiCarouselModule, TuiFieldErrorPipeModule,
  TuiInputModule,
  TuiInputSliderModule,
  TuiIslandModule,
  TuiActionModule,
  TuiInputPasswordModule,
  TuiPaginationModule, TuiTabsModule, TuiTextareaModule, TuiTextAreaModule
} from "@taiga-ui/kit";
import {CommonModule} from "@angular/common";
import {MarkersPageModule} from "./map/markers-page.module";
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { ForPartnersPageComponent } from './pages/for-partners-page/for-partners-page.component';
import { PointsService } from './services/points.service';
import { HttpClientModule } from "@angular/common/http";
import { NewsItemComponent } from './components/news-item/news-item.component';
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
import { AuthComponent } from './pages/auth/auth.component';
import {ReactiveFormsModule} from "@angular/forms";
import { BackButtonComponent } from './components/back-button/back-button.component';
import { AuthSerivce } from "./pages/auth/auth.service";
import { AuthInterceptor } from "./auth-interceptor";

export function tokenGetter() {
  return localStorage.getItem("token");
}

export function getAuthScheme() {
  return "Bearer ";
}

export function jwtOptionsFactory() {
  return {
    tokenGetter,
    authScheme: getAuthScheme,
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    NewsPageComponent,
    AboutUsPageComponent,
    ForPartnersPageComponent,
    NewsItemComponent,
    NewsItemPageComponent,
    BahiliComponent,
    FallenListyaComponent,
    ZasuhaComponent,
    FireworksComponent,
    GiftsComponent,
    TemperatureComponent,
    DokladComponent,
    ResultsComponent,
    KoroedComponent,
    Cop28Component,
    HellComponent,
    DermoComponent,
    BurnKabanComponent,
    EkbBeachComponent,
    ButterfliesComponent,
    BackButtonComponent,
    AuthComponent
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
    TuiTabsModule,
    HttpClientModule,
    TuiTextAreaModule,
    TuiTextareaModule,
    TuiActionModule,
    TuiHintModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
    TuiInputPasswordModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory:jwtOptionsFactory,
      },
      config: {
        throwNoTokenError: true,
        headerName:"Authorization",
        tokenGetter: tokenGetter,
        allowedDomains:["http://51.250.28.250:8080"]
      },
    }),
  ],
  providers: [
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
    AuthSerivce,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
