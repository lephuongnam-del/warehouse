/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-11-03 22:11:13
 * @modify date 2020-11-03 22:11:13
 * @desc Dashboard routing module
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDistributorComponent } from '../distributor/add-distributor/add-distributor.component';
import { UpdateDistributorComponent } from '../distributor/update-distributor/update-distributor.component';
import { ViewDistributorComponent } from '../distributor/view-distributor/view-distributor.component';
// import { AuthGuard } from '../guards/auth.guard';
// import { RoleGuard } from '../guards/role.guard';
import { MapComponent } from '../map/map.component';
import { AddProductOrderComponent } from '../products/add-product-order/add-product-order.component';
import { AddProductComponent } from '../products/add-product/add-product.component';
import { ViewProductOrdersComponent } from '../products/view-product-orders/view-product-orders.component';
import { ViewProductsComponent } from '../products/view-products/view-products.component';
import { EditProfileComponent } from '../profile/edit-profile/edit-profile.component';
import { ViewProfileComponent } from '../profile/view-profile/view-profile.component';
import { AddRawMaterialOrderComponent } from '../raw-materials/add-raw-material-order/add-raw-material-order.component';
import { AddRawMaterialComponent } from '../raw-materials/add-raw-material/add-raw-material.component';
import { ViewRawMaterialOrdersComponent } from '../raw-materials/view-raw-material-orders/view-raw-material-orders.component';
import { ViewRawMaterialComponent } from '../raw-materials/view-raw-material/view-raw-material.component';
import { AddSupplierComponent } from '../supplier/add-supplier/add-supplier.component';
import { UpdateSupplierComponent } from '../supplier/update-supplier/update-supplier.component';
import { ViewSupplierComponent } from '../supplier/view-supplier/view-supplier.component';
import { AddUserComponent } from '../users/add-user/add-user.component';
import { ViewUsersComponent } from '../users/view-users/view-users.component';
import { DashboardComponent } from './dashboard.component';
import { AddStaffComponent } from '../staffs/add-staff/add-staff.component';
import { PositionComponent } from '../position/position.component';
import { AddPositionComponent } from '../position/add-position/add-position.component';
import { ViewStaffComponent } from '../staffs/view-staff/view-staff.component';
import { AddOrderComponent } from '../order/add-order/add-order.component';
import { ViewOrderComponent } from '../order/view-order/view-order.component';
import { ViewOrderDetailComponent } from '../order/view-order-detail/view-order-detail.component';
import { ViewBillComponent } from '../bill/view-bill/view-bill.component';
import { AddBillComponent } from '../bill/add-bill/add-bill.component';
import { ViewBillDetailComponent } from '../bill/view-bill-detail/view-bill-detail.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'product_list/:id',
        component: ViewProductsComponent,
      },
      {
        path:'addposition',component:AddPositionComponent
      },
      {
        path:'position',component:PositionComponent
      },
      {
        path: 'supplier_list/:id',
        component: ViewSupplierComponent
      },
      {
        path: 'suppliers/:id/addproduct/:id',
        component: AddProductComponent
      },
      { path: 'productorders', component: ViewProductOrdersComponent },
      { path: 'addproductorder', component: AddProductOrderComponent },
      { 
        path: 'addstaff',
        component: AddStaffComponent 
      },
      {
        path: 'vieworderdetail/:id',
        component: ViewOrderDetailComponent
      },
      {
        path:'vieworder',
        component:ViewOrderComponent
      },
      {
        path: 'addorder',
        component: AddOrderComponent
      },
      {
        path: 'viewbill',
        component: ViewBillComponent
      },
      {
        path: 'viewbilldetail/:id',
        component: ViewBillDetailComponent
      },
      {
        path: 'addbill',
        component: AddBillComponent
      },
      { 
        path: 'staff',
        component: ViewStaffComponent
      },
      {
        path: 'rawmaterials',
        component: ViewRawMaterialComponent,
      },
      {
        path: 'addrawmaterial',
        component: AddRawMaterialComponent,
      },
      {
        path: 'addproduct',
        component: AddProductComponent,
      },
      // {
      //   path: 'viewProduct', ViewProductsComponent,
      // },
      {
        path: 'addrawmaterial',
        component: AddRawMaterialComponent,
      },
      { path: 'rawmaterialorders', component: ViewRawMaterialOrdersComponent },
      { path: 'addrawmaterialorder', component: AddRawMaterialOrderComponent },
      {
        path: 'suppliers',component: ViewSupplierComponent,
      },
      {
        path: 'addsupplier',component: AddSupplierComponent,
      },
      {
        path: 'distributors',
        component: ViewDistributorComponent,
      },
      {
        path: 'adddistributors',
        component: AddDistributorComponent,

      },
      {
        path: 'updatesupplier/:id',
        component: UpdateSupplierComponent,
      
      },
      {
        path: 'updatedistributor/:id',
        component: UpdateDistributorComponent,
    
      },
      {
        path: 'users',
        component: ViewUsersComponent,
     
      },
      {
        path: 'adduser',
        component: AddUserComponent,
        // canActivate: [RoleGuard],
        // data: { role: 'Admin' },
      },
      {
        path: 'editprofile/:id',
        component: EditProfileComponent,
        // canActivate: [RoleGuard],
        // data: { role: 'Admin' },
      },
      { path: 'viewprofile', component: ViewProfileComponent },
      { path: 'editprofile', component: EditProfileComponent },
      { path: '', pathMatch:'full',redirectTo:'suppliers/1' },
      {
        path:'map',component:MapComponent
      },
      // { path: '**', redirectTo: '/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
