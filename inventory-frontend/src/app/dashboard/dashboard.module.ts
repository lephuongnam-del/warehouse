import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddDistributorComponent } from '../distributor/add-distributor/add-distributor.component';
import { ViewDistributorComponent } from '../distributor/view-distributor/view-distributor.component';
import { AddProductOrderComponent } from '../products/add-product-order/add-product-order.component';
import { AddProductComponent } from '../products/add-product/add-product.component';
import { ViewProductOrdersComponent } from '../products/view-product-orders/view-product-orders.component';
import { ViewProductsComponent } from '../products/view-products/view-products.component';
import { ViewProfileComponent } from '../profile/view-profile/view-profile.component';
import { AddRawMaterialOrderComponent } from '../raw-materials/add-raw-material-order/add-raw-material-order.component';
import { AddRawMaterialComponent } from '../raw-materials/add-raw-material/add-raw-material.component';
import { ViewRawMaterialOrdersComponent } from '../raw-materials/view-raw-material-orders/view-raw-material-orders.component';
import { ViewRawMaterialComponent } from '../raw-materials/view-raw-material/view-raw-material.component';
import { SharedModule } from '../shared/shared.module';
import { AddSupplierComponent } from '../supplier/add-supplier/add-supplier.component';
import { ViewSupplierComponent } from '../supplier/view-supplier/view-supplier.component';
import { AddUserComponent } from '../users/add-user/add-user.component';
import { ViewUsersComponent } from '../users/view-users/view-users.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { EditProfileComponent } from '../profile/edit-profile/edit-profile.component';
import { UpdateDistributorComponent } from '../distributor/update-distributor/update-distributor.component';
import { UpdateSupplierComponent } from '../supplier/update-supplier/update-supplier.component';
import { MapComponent } from '../map/map.component';
import { AddStaffComponent } from '../staffs/add-staff/add-staff.component';
import { AddOrderComponent } from '../order/add-order/add-order.component';
import { ViewOrderComponent } from '../order/view-order/view-order.component';
import { ViewOrderDetailComponent } from '../order/view-order-detail/view-order-detail.component';
import { AddBillComponent } from '../bill/add-bill/add-bill.component';
import { ViewBillComponent } from '../bill/view-bill/view-bill.component';
import { ViewBillDetailComponent } from '../bill/view-bill-detail/view-bill-detail.component';

@NgModule({
  declarations: [
    ViewProductsComponent,
    AddProductComponent,
    AddRawMaterialComponent,
    ViewRawMaterialComponent,
    ViewRawMaterialOrdersComponent,
    AddRawMaterialOrderComponent,
    AddProductOrderComponent,
    ViewProductOrdersComponent,
    AddUserComponent,
    ViewUsersComponent,
    ViewProfileComponent,
    AddSupplierComponent,
    ViewSupplierComponent,
    ViewDistributorComponent,
    AddDistributorComponent,
    DashboardComponent,
    EditProfileComponent,
    UpdateDistributorComponent,
    UpdateSupplierComponent,
    MapComponent,
    AddStaffComponent,
    AddOrderComponent,
    ViewOrderComponent,
    ViewOrderDetailComponent,
    AddBillComponent,
    ViewBillComponent,
    ViewBillDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DashboardRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}
