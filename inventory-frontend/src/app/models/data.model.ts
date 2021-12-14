

export class Data {
    warehouse_id: number;
    warehouse_Name: string;
    location_x: number;
    location_Y: number;
    phoneNumber: string;
    product: Iproduct[]

}

export interface Iproduct {

    id: string;
    product_Name: string;
    qty: number;
    buy_price: number;
    sell_price: number;

}