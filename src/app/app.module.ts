import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingMainComponent } from './landing/landing-main/landing-main.component';
import { LandingAboutComponent } from './landing/landing-about/landing-about.component';
import { LandingComponent } from './landing/landing.component';
import { LandingFeaturedComponent } from './landing/landing-featured/landing-featured.component';
import { LandingSubscribeComponent } from './landing/landing-subscribe/landing-subscribe.component';
import { FooterComponent } from './footer/footer.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';

const appRoutes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'checkout', component: CheckoutComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingMainComponent,
    LandingAboutComponent,
    LandingComponent,
    LandingFeaturedComponent,
    LandingSubscribeComponent,
    FooterComponent,
    CheckoutComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
