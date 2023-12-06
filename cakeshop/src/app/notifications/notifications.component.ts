import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { OrderService } from '../services/order.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  user:User;
  constructor(private orderService:OrderService,private router:Router) { }
  notifications: Order[];
  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("user"));
    if(!this.user || this.user.type!='visitor'){
      this.router.navigate(['/']);
      return;
    }
    this.orderService.notifications(this.user._id).subscribe((orders:Order[])=>{
      this.notifications=orders;
    })
  
  }

}
