/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-11-08 23:25:16
 * @modify date 2020-11-08 23:25:16
 * @desc Manage roducts
 */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  serviceUrl = `${environment.protocol}${environment.applicationUrl}`;
   headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
 
  constructor(private http: HttpClient) {}

  fetchAllProducts() {
    return this.http.get(this.serviceUrl + '/productStock');
  }

  getProductByProductId(productId: number) {
    return this.http.get(this.serviceUrl + '/product/' + productId);
  }

  addProduct(formData) {
    return this.http.post(this.serviceUrl + '/add_product', formData,{headers:this.headers});
  }


  


}
