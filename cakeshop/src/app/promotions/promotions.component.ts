import { Component, OnInit } from '@angular/core';
import { Promotion } from '../models/promotion';
import { Router } from '@angular/router';
import { PromotionService } from '../services/promotion.service';
import { User } from '../models/user';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {

  promotions: Promotion[];
  constructor(private router:Router, private promotionService:PromotionService) { 
   
  }
  user:User;
  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("user"));
    if(this.user==null){
      return document.location.replace('/login');
    }
    if(this.user.type!='visitor'){
       this.router.navigate(['/orders']);
       return;
    }
    this.promotionService.get().subscribe((promotions:Promotion[])=>{
     this.promotions=promotions;
      
    })
  }

}
