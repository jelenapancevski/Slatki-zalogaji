import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { PromotionService } from '../services/promotion.service';
import { Promotion } from '../models/promotion';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
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
  logout(){
    sessionStorage.removeItem("user");
      document.location.replace('/login');
  }
}
