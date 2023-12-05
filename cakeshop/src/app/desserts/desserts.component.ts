import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css']
})
export class DessertsComponent implements OnInit {

  constructor(private productService:ProductService, private router:Router) { }
  desserts:Product[];
    ngOnInit(): void {
      this.productService.type("kolač").subscribe((desserts:Product[])=>{
        this.desserts=desserts;
      })
    }
  
    product(cake){
      sessionStorage.setItem('product',JSON.stringify(cake));
      this.router.navigate(["/product"]);
    }

}
