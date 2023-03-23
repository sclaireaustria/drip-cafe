import { Component } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-landing-featured',
  templateUrl: './landing-featured.component.html',
  styleUrls: ['./landing-featured.component.css']
})
export class LandingFeaturedComponent {
  selectedProduct: Product = new Product('',0,'','');
  activeButton: number = 0;
  products: Product[] = [
    new Product('Salted Caramel Cold Brew', 180, 'Our Signature Starbucks Cold Brew flavored with salted caramel syrup, with a salted caramel flavored foam and drizzle of caramel syrup to finish the drink.','../../../assets/images/products/salted-caramel.png'),
    new Product('Sweet Cream Cold Brew', 200, 'Our Signature Starbucks Cold Brew flavored with salted caramel syrup, with a salted caramel flavored foam and drizzle of caramel syrup to finish the drink.','../../../assets/images/products/sweet-cream-cold-brew.png'),
    new Product('Some other drink', 250, 'Our Signature Starbucks Cold Brew flavored with salted caramel syrup, with a salted caramel flavored foam and drizzle of caramel syrup to finish the drink.','../../../assets/images/products/sweet-cream-cold-brew.png')
  ];

  constructor() {
    // Set the default value
    this.selectedProduct = this.products[0];
  }

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }
}
