import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { DialogOverviewExampleDialog } from './viewproducts/viewproducts.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {ProducthttpService} from './producthttp.service';
import {ProductService} from './product.service';
import {MatDialogModule} from '@angular/material/dialog';
import { ApplicationRef } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ChartModule} from 'primeng/chart';
import {KeyFilterModule} from 'primeng/keyfilter';
import {CalendarModule} from 'primeng/calendar';
@NgModule({
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    ChartModule,
    KeyFilterModule,
    CalendarModule
    
  ],
  declarations: [AddproductsComponent, ViewproductsComponent,DialogOverviewExampleDialog, DashboardComponent],
  providers:[ProductService,ProducthttpService],
  
  entryComponents: [
    DialogOverviewExampleDialog,
  ]
})
export class ShoppingModule { }
