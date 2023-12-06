import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent implements OnInit {

  constructor(private productService:ProductService, private router:Router) { }
cakes:Product[];
user:User;
  ngOnInit(): void {
    this.user=JSON.parse(sessionStorage.getItem("user"));
    if(!this.user || this.user.type !="visitor") {
      this.router.navigate(['/']);
      return;
    }     
    this.productService.type("torta").subscribe((cakes:Product[])=>{
      this.cakes=cakes;
    })
  }

  product(cake){
    sessionStorage.setItem('product',JSON.stringify(cake));
    this.router.navigate(["/product"]);
  }
}
