import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { CartItem } from '../model/cart-item';
import { Product } from '../model/product';

import * as city from  '../../assets/scripts/ph-provinces.js';
import { ProductType } from '../data/product-type';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent {
  selectedProvince = 'Select province';
  selectedCity = 'Select city';
  isDisabled = true;
  cityJs;
  shoppingCart: CartItem[] = [
    new CartItem(new Product(1, 'Salted Caramel Cold Brew', new ProductType(1, true, 'Coffee'), 180, 'Our Signature Starbucks Cold Brew flavored with salted caramel syrup, with a salted caramel flavored foam and drizzle of caramel syrup to finish the drink.','../../../assets/images/products/salted-caramel.png'), 10),
    new CartItem(new Product(2, 'Some other drink', new ProductType(1, true, 'Coffee'), 250, 'Our Signature Starbucks Cold Brew flavored with salted caramel syrup, with a salted caramel flavored foam and drizzle of caramel syrup to finish the drink.','../../../assets/images/products/sweet-cream-cold-brew.png'), 3)
  ];

  constructor(private appComponent: AppComponent) {
    appComponent.showHeaderAndFooter = false;

  }

  ngOnInit() {
    this.cityJs = new city();

    this.cityJs.showProvinces('#province');
  }

  getCities() {
    this.isDisabled = false;
    this.cityJs.showCities(this.selectedProvince,'#city');
  }



}
