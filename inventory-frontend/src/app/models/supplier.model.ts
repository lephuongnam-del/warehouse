/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-11-08 18:37:11
 * @modify date 2020-11-08 18:37:11
 * @desc Supplier Etity
 */
export class Supplier {
  id: number;
  brand_name: string;
  location: Object = {
    geo_location_x: 10.762622,
    geo_location_y: 106.660172
  }
}
