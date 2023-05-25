import { Injectable } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductType } from 'src/app/data/product-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return [
      { id: 1, name: 'Latte', type: new ProductType(1, true, 'Brewed Coffee'), description: 'Brewed Coffee', price: 1.99, image: '../../../assets/images/products/sweet-cream-cold-brew.png' },
      { id: 2, name: 'Cappuccino', type: new ProductType(1, true, 'Brewed Coffee'), description: 'Brewed Coffee', price: 2.99, image: '../../../assets/images/products/sweet-cream-cold-brew.png' },
      { id: 3, name: 'Espresso', type: new ProductType(1, true, 'Espresso'), description: 'Espresso', price: 3.99, image: '../../../assets/images/products/sweet-cream-cold-brew.png' },
      { id: 4, name: 'Mocha', type: new ProductType(1, true, 'Espresso'), description: 'Espresso', price: 4.99, image: '../../../assets/images/products/sweet-cream-cold-brew.png' },
      { id: 5, name: 'Americano', type: new ProductType(1, true, 'Blended Beverage'), description: 'Blended Beverage', price: 5.99, image: '../../../assets/images/products/sweet-cream-cold-brew.png' },
      { id: 6, name: 'Macchiato', type: new ProductType(1, true, 'Teavana Tea'), description: 'Teavana Tea', price: 15.99, image: '../../../assets/images/products/sweet-cream-cold-brew.png' },
      { id: 7, name: 'Flat White', type: new ProductType(1, true, 'Teavana Tea'), description: 'Teavana Tea', price: 25.99, image: '../../../assets/images/products/sweet-cream-cold-brew.png' },
      { id: 8, name: 'Irish Coffee', type: new ProductType(1, true, 'Chocolate'), description: 'Chocolate', price: 45.99, image: '../../../assets/images/products/sweet-cream-cold-brew.png' },
      { id: 9, name: 'Affogato', type: new ProductType(1, true, 'Chocolate'), description: 'Chocolate', price: 95.99, image: '../../../assets/images/products/sweet-cream-cold-brew.png' },
      { id: 10, name: 'Turkish Coffee', type: new ProductType(1, true, 'Chocolate'), description: 'Chocolate', price: 25.99, image: '../../../assets/images/products/sweet-cream-cold-brew.png' }
    ];
  }

  getTypesOfProduct(): ProductType[] {
    return [
      new ProductType(2, true, 'Brewed Coffee'),
      new ProductType(3, true, 'Espresso'),
      new ProductType(4, true, 'Blended Beverage'),
      new ProductType(5, true, 'Teavana Tea'),
      new ProductType(6, true, 'Chocolate'),
      new ProductType(1, true, 'All'),
    ]
  }
}
