import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private router:Router) { }
  order:Order;
  user:User;
  ngOnInit(): void {
    this.user=JSON.parse(sessionStorage.getItem("user"));
    if(!this.user || this.user.type!='visitor') {
      this.router.navigate(['/']);
      return;
    }  
    this.order = JSON.parse(sessionStorage.getItem("order"));
  }

}
