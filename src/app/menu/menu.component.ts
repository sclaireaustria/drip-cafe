import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductType } from '../data/product-type';
import { ProductService } from '../services/product/product.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  currentPage = 1;
  itemsPerPage = 8;
  currentType: string ='All';
  pageNumbers: number[] = [];
  typesOfProduct: ProductType[] = [];
  listOfProducts: Product[] = [];

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.typesOfProduct = this.retrieveTypesOfProducts(true);
    this.reloadAndFilterList(true,'All');
    this.pageNumbers = Array(Math.ceil(this.listOfProducts.length / this.itemsPerPage)).fill(0).map((x, i) => i + 1);
  }

  reloadAndFilterList(isDrink: boolean, filterCriteria: string) {
    this.currentType = filterCriteria;
    if (filterCriteria === 'All') {
      this.listOfProducts = this.productService.getProducts();
    } else {
      this.listOfProducts = this.productService.getProducts().filter(product => product.type.drink_indicator === isDrink && product.type.type === filterCriteria);
    }
    this.pageNumbers = Array(Math.ceil(this.listOfProducts.length / this.itemsPerPage)).fill(0).map((x, i) => i + 1);
  }

  reloadViaHeading(isDrink: boolean) {
    this.listOfProducts = this.productService.getProducts().filter(product => product.type.drink_indicator === isDrink);
    this.typesOfProduct = this.retrieveTypesOfProducts(isDrink);
    this.pageNumbers = Array(Math.ceil(this.listOfProducts.length / this.itemsPerPage)).fill(0).map((x, i) => i + 1);
  }

  retrieveTypesOfProducts(isDrink: boolean): ProductType[] {
    return this.productService.getTypesOfProduct().filter(productType => productType.drink_indicator === isDrink);
  }

  getPaginatedProducts(): Product[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.listOfProducts.slice(startIndex, endIndex);
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
  }

  addToCart(product: Product) {
    const cartItems = this.cartService.getItems();
    const cartItem = cartItems.find((item) => item.product.id === product.id);

    if (cartItem) {
      cartItem.increaseQuantity();
    } else {
      this.cartService.addItem(product);
    }
  }
}
