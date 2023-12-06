import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private router:Router, private orderService:OrderService,private userService:UserService) { }
  orders:Order[];

  user:User;
  ngOnInit(): void {
    this.user=JSON.parse(sessionStorage.getItem("user"));
    if(!this.user || this.user.type!='staff') {
      this.router.navigate(['/']);
      return;
    }  
    this.orderService.orders().subscribe((orders:Order[])=>{
      this.orders= orders;
      this.orders.forEach((order)=>{
        this.userService.user(order.buyer).subscribe((user:User)=>{
          order._user=user;
        })
      
      })
    })
  }
}
