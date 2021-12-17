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

 export class Order {
   id: number;
   staff: staff;
   moneynumber: number;
   directions: number;
   warehouse: Supplier;
   product: Product[];
   location: Object = {
    geo_location_x: 10.762622,
    geo_location_y: 106.660172
  }
 }
 