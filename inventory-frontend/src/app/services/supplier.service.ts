/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-11-08 18:35:38
 * @modify date 2020-11-08 18:35:38
 * @desc Manage Supplier related operation
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Supplier } from '../models/supplier.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  serviceUrl =
    environment.protocol +
    environment.applicationUrl;

  constructor(private http: HttpClient) {}

  // fetchAllSuppliers(index): Observable<Supplier[]> {
  //   return this.http.get<Supplier[]>(this.serviceUrl + '/warehouse_list/' + index)
  //   .pipe(
  //     map(res => res['list'])
      
  //   );
  // }
  fetchAllSuppliers(index){
    return this.http.get(this.serviceUrl + '/warehouse_list/' + index)
  }
  addSupplier(formData) {
    console.log(formData)
    return this.http.post(this.serviceUrl + '/add_warehouse', formData);
  }

  updateSupplier(formData) {
    return this.http.put(this.serviceUrl + '/warehouse/' + formData.id, formData);
  }

  fetchById(id) {
    return this.http.get(this.serviceUrl + '/warehouse/' + id);
  }
}
