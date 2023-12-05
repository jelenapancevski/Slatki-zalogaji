import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cakeshop';
  user:User;
  ngOnInit(): void {
   
    this.user=JSON.parse(sessionStorage.getItem("user"));
    
  }
  
  logout(){
    sessionStorage.removeItem("user");
      document.location.replace('/login');
  }
}

