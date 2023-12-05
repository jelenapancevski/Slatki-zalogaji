import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  editData:boolean;
  show:number;
  user:User;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.show=0;
    this.editData=false;
    this.user=JSON.parse(sessionStorage.getItem("user"));
    if(!this.user) {
      this.router.navigate(['/']);
      return;
    }     

  }


  updatedata(){
    this.editData=true;
    this.show=1;
  }
  updatepassword(){
    this.editData=true;
    this.show=2;
  }
}
