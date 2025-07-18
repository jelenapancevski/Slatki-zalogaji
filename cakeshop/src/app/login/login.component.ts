import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'cakeshop';
  user: User;
  message: String;
  hide = true;
  
  constructor(private router: Router,private userService: UserService) { 

  }
  
  loginForm : FormGroup;

  ngOnInit(): void {
    this.message = null;
    this.user=JSON.parse(sessionStorage.getItem("user"));
    if(this.user){
      switch(this.user.type){
        case "visitor":
          document.location.replace('/');
          break;
        case "staff":
          document.location.replace('/orders');
          break;
      }
      
    }
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }
  setMessageIfFormInvalid() {
    if (this.loginForm.invalid) {
      this.message = "Neophodno je uneti korisničko ime i lozinku";
    }
  }

  login(){
    this.userService.login(this.loginForm.get('username').value,this.loginForm.get('password').value).subscribe((resp:Object)=>{
      let user = <User>resp;
      switch(user.type){
        case "visitor":
          sessionStorage.setItem("user", JSON.stringify(user));
          document.location.reload();
          document.location.replace('/');
          break;
        case "staff":
          sessionStorage.setItem("user", JSON.stringify(user));
          
          document.location.replace('/orders');
          break;
        default:
          this.message= 'Uneti kredencijali nisu validni';
          break;
             
      }
        
      }); 
    }
  logout(){
    sessionStorage.removeItem("user");
    document.location.replace('/');
    this.user=null;
  }

}
