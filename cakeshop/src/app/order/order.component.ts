import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { User } from '../models/user';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input() order;
  @Input() user;
  loggeduser:User;
  showdate(date) {
    let newdate = new Date(date);
    let dates = (newdate.getDate() < 10) ? '0' + newdate.getDate() : newdate.getDate();
    dates += "/";
    dates += ((newdate.getMonth() + 1) < 10) ? '0' + (newdate.getMonth() + 1) : "" + (newdate.getMonth() + 1);
    dates += "/" + newdate.getFullYear();
    return dates;
  }

  constructor(private router: Router, private orderService: OrderService, private productService: ProductService) {

  }

  map: Map<string, Product> = new Map();
  initMap() {
    this.order.totalprice = 0;
    this.order.products.forEach(product => {
      this.productService.product(product['productid']).subscribe((prod: Product) => {
        this.map.set(product['productid'], prod);
        this.order.totalprice += JSON.parse(product['amount']) * this.map.get(product['productid']).price;
      })
    });
  }
  calctotalprice() {

    this.order.totalprice = 0;
    this.order.products.forEach(product => {
      this.productService.product(product['productid']).subscribe((prod: Product) => {
        this.map.set(product['productid'], prod);
        this.order.totalprice += JSON.parse(product['amount']) * this.map.get(product['productid']).price;
      })
    });


  }

  ngOnInit(): void {
  this.loggeduser = JSON.parse(sessionStorage.getItem("user"));
    this.order._user = this.user;
    this.calctotalprice();



  }

  delete(product) {

    let index = this.order.products.indexOf(product);
    this.order.products.splice(index, 1);
    sessionStorage.setItem("order", JSON.stringify(this.order));

  }

  send(){
    this.orderService.add(this.order).subscribe((message:String)=>{
      sessionStorage.removeItem('order');
      document.location.reload();
    })
  }


  accept(){
    this.orderService.accept(this.order._id,this.order).subscribe();
      document.location.reload();
  }

  deny(){
 this.orderService.deny(this.order._id).subscribe();
  document.location.reload();
  /*let index= this.requests.indexOf(request);
  this.requests.splice(index, 1);*/
  
  }
}
