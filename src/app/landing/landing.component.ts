import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  constructor(private appComponent: AppComponent) {
    appComponent.showHeaderAndFooter = true;
  }


}
