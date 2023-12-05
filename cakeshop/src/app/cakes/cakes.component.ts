import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent implements OnInit {

  constructor(private productService:ProductService, private router:Router) { }
cakes:Product[];
  ngOnInit(): void {
    this.productService.type("torta").subscribe((cakes:Product[])=>{
      this.cakes=cakes;
    })
  }

  product(cake){
    sessionStorage.setItem('product',JSON.stringify(cake));
    this.router.navigate(["/product"]);
  }
}
