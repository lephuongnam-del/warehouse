/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-11-05 23:34:46
 * @modify date 2020-11-05 23:34:46
 * @desc [description]
 */

import { Warehouse } from './warehouse.model';
import { Product } from './product.model';


 export class Order {
   id: number;
   staff: number;
   moneynumber: number;
   directions: number;
   warehouse: Warehouse[];
   product: Product[];
 }
 