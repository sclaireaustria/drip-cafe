import { Component } from '@angular/core';
import * as $ from 'jquery';
import 'bootstrap';
import { toggleCart, incrementValue, decrementValue } from '../../assets/scripts/javascript-functions.js';
import { Cart } from '../data-model/cart';
import { CartItem } from '../data-model/cart-item';
import { Product } from '../data-model/product';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  totalAmount = 0;
  cartItem: CartItem = new CartItem(new Product('',0,'',''),0);
  shoppingCart: CartItem[] = [
    new CartItem(new Product('Salted Caramel Cold Brew', 180, 'Our Signature Starbucks Cold Brew flavored with salted caramel syrup, with a salted caramel flavored foam and drizzle of caramel syrup to finish the drink.','../../../assets/images/products/salted-caramel.png'), 10),
    new CartItem(new Product('Some other drink', 250, 'Our Signature Starbucks Cold Brew flavored with salted caramel syrup, with a salted caramel flavored foam and drizzle of caramel syrup to finish the drink.','../../../assets/images/products/sweet-cream-cold-brew.png'), 3)
  ];

  constructor() {
    for (this.cartItem of this.shoppingCart) {
      this.totalAmount = this.totalAmount + (this.cartItem.product.amount * this.cartItem.quantity);
    }
  }

  ngOnInit() {
    toggleCart()
  }



}
