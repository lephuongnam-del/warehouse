/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-11-04 09:28:33
 * @modify date 2020-11-04 09:28:33
 * @desc Root App module
 */
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { httpInterceptors } from './interceptors';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { PositionComponent } from './position/position.component';
import { AddPositionComponent } from './position/add-position/add-position.component';
import { ViewStaffComponent } from './staffs/view-staff/view-staff.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [AppComponent, PositionComponent, AddPositionComponent, ViewStaffComponent, OrderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DashboardModule,
    // AuthModule,
    BrowserAnimationsModule,
  ],
  providers: [
    httpInterceptors,
    JwtHelperService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
