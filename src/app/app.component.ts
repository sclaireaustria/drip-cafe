import { Component, OnInit } from '@angular/core';
import { shrinkNavOnScroll, changeOnClick } from '../assets/scripts/javascript-functions.js';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'drip-cafe';
  showHeaderAndFooter = true;

  constructor() {
  }

  ngOnInit(){
    shrinkNavOnScroll()
    changeOnClick()

  }

}
