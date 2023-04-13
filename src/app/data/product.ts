import { ProductType } from "./product-type";

export class Product {
    id: number;
    name: string;
    type: ProductType;
    description: string;
    price: number;


    constructor(id: number, name: string, type: ProductType, description: string, price: number) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.description = description;
        this.price = price;
    }
}
