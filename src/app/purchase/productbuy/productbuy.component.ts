import { Component, OnInit } from '@angular/core';
import { Product } from '../../shopping/product.model';
import { Boughtitem } from '../productbought.model';
import { PurchaseserviceService } from '../purchaseservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productbuy',
  templateUrl: './productbuy.component.html',
  styleUrls: ['./productbuy.component.css']
})
export class ProductbuyComponent implements OnInit {
  product:Product;
  boughtitem:Boughtitem;
  deladdress:string;
  constructor(private serv:PurchaseserviceService,private router:Router) { }

  ngOnInit() {
    this.product = this.serv.boughtproduct;
  }

  buyproduct(product:Product){
    this.boughtitem = new Boughtitem(this.product,this.deladdress);
    this.serv.buyproduct(this.boughtitem).subscribe(
      (data) =>   {  alert("added to buy list") ;
      this.router.navigateByUrl('/purchase/productlist');
      
    }

    );
  }



}
