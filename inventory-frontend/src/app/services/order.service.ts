/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-11-05 00:48:39
 * @modify date 2020-11-05 00:48:39
 * @desc Used to manage Users
 */
 import { HttpClient } from '@angular/common/http';
 import { Injectable } from '@angular/core';
 import { environment } from 'src/environments/environment';
 
 @Injectable({
   providedIn: 'root',
 })
 export class OrderService {
   authServiceUrl = `${environment.protocol}${environment.applicationUrl}/${environment.authService}`;
   serviceUrl =
   environment.protocol +
   environment.applicationUrl;

   constructor(private http: HttpClient) {}
 
   fetchOrders() {
     return this.http.get(this.serviceUrl + '/order_list/1');
   }
 
   addOrders(formData) {
     return this.http.post(this.serviceUrl + '/add_order', formData);
   }
   fetchById(id) {
     return this.http.get(this.serviceUrl + '/order/' + id);
   }
 }
 