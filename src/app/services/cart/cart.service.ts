import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';
import { Product } from 'src/app/model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: CartItem[] = []

  addItem(product: Product) {
    this.items.push(new CartItem(product, 1));
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
