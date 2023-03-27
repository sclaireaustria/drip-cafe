export class ProductType {
    id: number;
    drink_indicator: boolean;
    type: string;

    constructor(id: number, drink_indicator: boolean, type: string) {
        this.id = id;
        this.drink_indicator = drink_indicator;
        this.type = type;
    }
}
