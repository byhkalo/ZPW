import { Product } from "./product.model";

export class Order {
    id: number;
    userFirstName: string;
    userLastName: string;
    addres: string;
    products: [Product];
}