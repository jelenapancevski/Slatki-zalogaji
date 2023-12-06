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
  user: User
  constructor(private productService: ProductService, private router: Router) { }
  desserts: Product[];

  currentdesserts: Product[];
  totalitems: number;
  currentpage: number = 1;
  totalpages: number;
  itemsperpage: number;
  pages: number[] = [];
  nextpage() {
    if (this.currentpage < this.totalpages)
      this.setcurrentpage(this.currentpage + 1);
  }
  previouspage() {
    if (this.currentpage > 1) this.setcurrentpage(this.currentpage - 1);
  }
  setcurrentpage(page) {
    this.currentpage = page;
    this.dataForPage();
  }
  dataForPage() {
    let first = (this.currentpage-1)*this.itemsperpage;
    let last = first+this.itemsperpage;
    this.currentdesserts = [];
    for (let i = first; i < last; i++) {
      if (i > this.desserts.length) break;
      this.currentdesserts.push(this.desserts[i]);
    }
  }
  initPagination() {
    this.itemsperpage = 3;
    if (this.totalitems) this.totalpages = Math.ceil(this.totalitems / this.itemsperpage);
    for (let i = 0; i < this.totalpages; i++)this.pages.push(i + 1);
  }
  ngOnInit(): void {

    this.user = JSON.parse(sessionStorage.getItem("user"));
    if (!this.user || this.user.type != "visitor") {
      this.router.navigate(['/']);
      return;
    }

    this.productService.type("kolač").subscribe((desserts: Product[]) => {
      this.desserts = desserts;
      this.totalitems = desserts.length;
      this.initPagination();
      this.dataForPage();
    })
  }

  product(cake) {
    sessionStorage.setItem('product', JSON.stringify(cake));
    this.router.navigate(["/product"]);
  }

}
