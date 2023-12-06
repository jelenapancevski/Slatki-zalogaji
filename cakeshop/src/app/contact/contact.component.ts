import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router:Router) { }
  user:User
  ngOnInit(): void {
    this.user=JSON.parse(sessionStorage.getItem("user"));
    if(!this.user || this.user.type !="visitor") {
      this.router.navigate(['/']);
      return;
    }    
  }

}
