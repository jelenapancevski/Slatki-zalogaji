import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css']
})
export class DessertsComponent implements OnInit {
  user:User
  constructor(private productService:ProductService, private router:Router) { }
  desserts:Product[];
    ngOnInit(): void {

      this.user=JSON.parse(sessionStorage.getItem("user"));
      if(!this.user || this.user.type !="visitor") {
        this.router.navigate(['/']);
        return;
      }    

      this.productService.type("kolač").subscribe((desserts:Product[])=>{
        this.desserts=desserts;
      })
    }
  
    product(cake){
      sessionStorage.setItem('product',JSON.stringify(cake));
      this.router.navigate(["/product"]);
    }

}
