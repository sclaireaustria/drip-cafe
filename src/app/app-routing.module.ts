import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingAboutComponent } from './landing/landing-about/landing-about.component';
import { LandingComponent } from './landing/landing.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes =[
  {path:'', component:LandingComponent},
  {path:'menu', component:MenuComponent},
  {path:'about', component:LandingComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
