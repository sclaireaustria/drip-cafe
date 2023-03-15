import { Component } from '@angular/core';
import { Product } from 'src/app/data-model/product';

@Component({
  selector: 'app-landing-featured',
  templateUrl: './landing-featured.component.html',
  styleUrls: ['./landing-featured.component.css']
})
export class LandingFeaturedComponent {
  product: Product = new Product('Salted Caramel Cold Brew', 180, 'Our Signature Starbucks Cold Brew flavored with salted caramel syrup, with a salted caramel flavored foam and drizzle of caramel syrup to finish the drink.','../../../assets/images/products/salted-caramel.png');
}
