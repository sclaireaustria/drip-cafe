import { ProductType } from "../data/product-type";

export class Product {
  constructor(
    public id: number,
    public name: string,
    public type: ProductType,
    public price: number,
    public description: string,
    public image: string
  ) {}
}
