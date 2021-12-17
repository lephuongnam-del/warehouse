import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  serviceUrl = `${environment.protocol}${environment.applicationUrl}`;
   headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
 
  constructor(private http: HttpClient) {}

  fetchAllPosition() {
    return this.http.get(this.serviceUrl + '/position_list');
  }
  addPosition(formData) {
    console.log(this.serviceUrl + '/add_position');
    return this.http.post(this.serviceUrl + '/add_position', formData);
  }
}
