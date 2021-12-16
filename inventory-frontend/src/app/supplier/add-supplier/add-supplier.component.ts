import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/models/supplier.model';
import { SupplierService } from 'src/app/services/supplier.service';
import { mapDetailService } from 'src/app/services/map-service';
@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css'],
})
export class AddSupplierComponent implements OnInit {
  supplier: Supplier;
  
  constructor(private mapService: mapDetailService, private service: SupplierService, private router: Router) {
    this.supplier = new Supplier();
  }
  lat: number;
  lng: number
  ngOnInit(): void {
    this.supplier.location["geo_location_x"] = 10.762622;
    this.supplier.location["geo_location_y"] = 106.660172;
    this.mapService.changeCoordinateLat(10.762622);
    this.mapService.changeCoordinateLng(106.660172);
    this.mapService.currentCoordinatelat.subscribe(lat => (
      this.lat = lat));
    this.mapService.currentCoordinatelng.subscribe(lng => (
      this.lng= lng));
  }

  addSupplier() {
    this.supplier.location["geo_location_x"] = this.lat;
    this.supplier.location["geo_location_y"] = this.lng;
    this.service.addSupplier(this.supplier).subscribe((res) => {
      this.router.navigate(['/dashboard/suppliers']);
    });
  }
}
