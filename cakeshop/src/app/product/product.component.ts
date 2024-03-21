import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Comment } from '../models/comment';
import { Order } from '../models/order';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  amount:number;
  product: Product;
  user: User;
  newcomment: String;
  order:Order;
  message:string;
  constructor(private userService: UserService, private router: Router, private productService: ProductService) {
    
  }

  sortbyDate(first: Comment, second: Comment) {
    if (first.date > second.date) return -1;
    else if (first.date == second.date) return 0;
    else return 1;
  }
  setDate(comment) {
    let date = new Date(comment.date);
    if(date.getDate()<10) comment.day = "0"+date.getDate();
    else comment.day = date.getDate();
    if((date.getMonth() + 1)<10) comment.month = "0"+(date.getMonth() + 1);
    else comment.month = date.getMonth() + 1;
    comment.year = date.getFullYear();
    if(date.getHours()<10) comment.hours = "0"+ date.getHours();
    else comment.hours = date.getHours();
    if(date.getMinutes()<10) comment.minutes = "0"+date.getMinutes();
    else comment.minutes = date.getMinutes();
  
}
  setDates() {
    let id = 0;
    this.product.comments.forEach(comment => {
      let date = new Date(comment.date);
     this.setDate(comment)
      comment.id = id++;
    });
  }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("user"));
    this.product = JSON.parse(sessionStorage.getItem("product"));
    if(this.product==null)  {
      this.router.navigate(["/"]);
      return;
    } 
    this.productService.product(this.product._id).subscribe((product:Product)=>{
      this.product=product;
      this.setDates();
      this.product.comments = this.product.comments.sort(this.sortbyDate);
      this.product.comments.forEach(comment => {
        this.userService.user(comment.username).subscribe((user: User) => {
          comment.user = user;
        })
      
    })
    })
      


  }
  
 
  comment() {
    let comment = {
      username: this.user._id,
      comment: this.newcomment,
      date: new Date(),
      edited: false
    }
    this.productService.comment(this.product._id, comment).subscribe((msg: String) => {
            document.location.reload();
    })
  }

  //add to bucket
  add(amount){
    this.order = JSON.parse(sessionStorage.getItem("order"));
    if(this.order==null){
      //new order
      this.order = new Order();
      this.order.buyer = this.user._id;
      this.order.date = new Date();
      this.order.notified= null;
      this.order.status = 'pending';
      this.order.products = [];
    }
    let found=false;
    this.order.products.forEach((product)=>{
      if(product['productid']==this.product._id){
        product['amount']+=amount;
        found=true;
      }
    })
    if(!found){
      this.order.products.push({"productid":this.product._id,"amount":amount});
    }
    sessionStorage.setItem("order",JSON.stringify(this.order));
    this.amount=null;
    this.message = "Proizvod je uspešno dodat u korpu!";

  }
  
}
