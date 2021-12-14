import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable,ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class mapDetailService {
    constructor(){}
    //Using any
    public lat: number = 10.762622;
    public lng: number = 106.660172;
    // public subject = new Subject<any>();
    private coordinateLatSource = new  BehaviorSubject(this.lat);
    private coordinateLngSource = new BehaviorSubject(this.lng);
    currentCoordinatelat = this.coordinateLatSource.asObservable();
    currentCoordinatelng = this.coordinateLngSource.asObservable();
    changeCoordinateLat(lat: number) {
        this.coordinateLatSource.next(lat)
        this.lat = lat;
    }
    changeCoordinateLng(lng: number) {
        this.coordinateLngSource.next(lng)
        this.lng = lng;
    }
    getCoordinateLat() {
        return this.lat;
    }
    getCoordinateLng() {
        return this.lng;
    }
}
    