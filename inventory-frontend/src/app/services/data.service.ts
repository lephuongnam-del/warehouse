import { Injectable } from "@angular/core";
import { Data } from "../models/data.model";

@Injectable({
    providedIn: 'root'
})

export class DataService {
   DATA: Data[] = [
        {
            warehouse_id: 1,
            warehouse_Name: 'warehouse 1',
            location_x: 10.762622,
            location_Y: 106.660172,
            phoneNumber:'091212312312',
            product: [
                {
                    id: '1',
                    product_Name: 'sting',
                    qty:3,
                    buy_price: 30,
                    sell_price: 40
                },
                {
                    id: '2',
                    product_Name: 'C2',
                    qty:3,
                    buy_price: 30,
                    sell_price: 40
                }
            ]

        },
        {
            warehouse_id: 2,
            warehouse_Name: 'warehouse 2',
            location_x: 1,
            location_Y: 2,
            phoneNumber:'091212312312',
            product: [
                {
                    id: '2',
                    product_Name: 'red bull',
                    qty:3,
                    buy_price: 30,
                    sell_price: 40
                }
            ]

        },

    ]

    getData(): Data[] {
        return this.DATA;
    }

    getSingleWarehouse(id: number):Data {
        return this.DATA.find(warehouse => warehouse.warehouse_id === id)
      }
    
    updateEvent(event){
        let index = this.DATA.findIndex(x => x.warehouse_id = event.id);
        Data[index]= event
      }

}




