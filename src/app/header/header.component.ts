import { Component } from '@angular/core';
import * as $ from 'jquery';
import 'bootstrap';
import { toggleCart, incrementValue, decrementValue } from '../../assets/scripts/javascript-functions.js';
import { Cart } from '../model/cart';
import { CartItem } from '../model/cart-item';
import { Product } from '../model/product';
import { ProductType } from '../data/product-type';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  items = this.cartService.getItems();
  totalAmount = 0;
  cartItem: CartItem = new CartItem(new Product(0, '', new ProductType(0, true,''), 0, '',''),0);
  // shoppingCart: CartItem[] = [
  //   new CartItem(new Product(1, 'Salted Caramel Cold Brew', new ProductType(1, true, 'Coffee'), 180, 'Our Signature Starbucks Cold Brew flavored with salted caramel syrup, with a salted caramel flavored foam and drizzle of caramel syrup to finish the drink.','../../../assets/images/products/salted-caramel.png'), 7),
  //   new CartItem(new Product(2, 'Some other drink', new ProductType(1, true, 'Coffee'), 250, 'Our Signature Starbucks Cold Brew flavored with salted caramel syrup, with a salted caramel flavored foam and drizzle of caramel syrup to finish the drink.','../../../assets/images/products/sweet-cream-cold-brew.png'), 2)
  // ];

  constructor(private cartService: CartService) {
    for (this.cartItem of this.items) {
      console.log('cart item: ' + this.cartItem);
      this.totalAmount = this.totalAmount + (this.cartItem.product.price * this.cartItem.quantity);
    }
  }

}
