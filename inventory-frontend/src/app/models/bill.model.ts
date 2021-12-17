/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-11-05 23:34:46
 * @modify date 2020-11-05 23:34:46
 * @desc [description]
 */

 import { Warehouse } from './warehouse.model';
 import { Product } from './product.model';
 import { staff } from './staff.model';
 import { Supplier } from './supplier.model';
 
  export class Bill {
    id: number;
    price: staff;
    receivedDate: string;
    products: Product[];
  }
  