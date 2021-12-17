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
 export class BillService {
   authServiceUrl = `${environment.protocol}${environment.applicationUrl}/${environment.authService}`;
   serviceUrl =
   environment.protocol +
   environment.applicationUrl;

   constructor(private http: HttpClient) {}
 
   fetchBills() {
     return this.http.get(this.serviceUrl + '/bill_list/1');
   }
 
   addBills(formData) {
     return this.http.post(this.serviceUrl + '/add_bill', formData);
   }
   fetchById(id) {
     return this.http.get(this.serviceUrl + '/bill/' + id);
   }
 }
 