import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingMainComponent } from './landing/landing-main/landing-main.component';
import { LandingAboutComponent } from './landing/landing-about/landing-about.component';
import { LandingComponent } from './landing/landing.component';
import { LandingFeaturedComponent } from './landing/landing-featured/landing-featured.component';
import { LandingSubscribeComponent } from './landing/landing-subscribe/landing-subscribe.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingMainComponent,
    LandingAboutComponent,
    LandingComponent,
    LandingFeaturedComponent,
    LandingSubscribeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
