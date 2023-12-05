import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Address } from '../models/address';
import { UserService } from '../services/user.service';
function emailFormat(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const letter = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(control.value);
    return letter ?  null:{'email': {value: "Invalid email format"}} ;
  };
}
@Component({
  selector: 'app-updatedata',
  templateUrl: './updatedata.component.html',
  styleUrls: ['./updatedata.component.css']
})
export class UpdatedataComponent implements OnInit {
  @Input() user:User;
  constructor(private router:Router, private userService:UserService,private formbuilder: FormBuilder) { }      
 
  emailTaken(_id): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if(control.value==null) return null;
     let user =  this.users.find(user=> user.email == control.value);
      return ((user && user._id!=_id)) ? {'email': {value: "Email is taken"}}: null;
    };
  }
  usernameTaken(_id): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if(control.value==null) return null;
     let user =  this.users.find(user=> user.username == control.value);

      return ((user && user._id!=_id)) ? {'username': {value: "Username is taken"}}: null;
    };
  }
  ngOnInit(): void {
    if(!this.user) this.router.navigate(['/']);
    this.userService.get().subscribe((users:User[])=>{
      this.users = users;
    this.EditPersonalData = new FormGroup({
      firstname: new FormControl(this.user.firstname, Validators.required),
      lastname: new FormControl(this.user.lastname, Validators.required),
      username: new FormControl(this.user.username, [Validators.required, this.usernameTaken(this.user._id)]),
      street: new FormControl(this.user.address.street, [Validators.required]),
      number: new FormControl(this.user.address.number, [Validators.required, Validators.pattern("^[1-9]+[0-9]*$")]),
      city: new FormControl(this.user.address.city, [Validators.required, ]),
      phone: new FormControl(this.user.phone, [Validators.required,Validators.pattern("^06[0-9]{7,8}$")]),
      email: new FormControl(this.user.email, [Validators.required, Validators.email, emailFormat(), this.emailTaken(this.user._id)]),
    });
   
    })
    
    
    
  }
 
EditPersonalData:FormGroup;
users: User[];
edit:boolean;
editpass:boolean;
password1:string;
password2:string;
password:string;
message:string;

profile(){
  document.location.replace('/profile');
}

saveChanges(){
    //username, newusername, password, firstname, lastname, address, phone, email, image
    this.userService.edit(this.user).subscribe((msg:String)=>{
    sessionStorage.removeItem('user');
    this.userService.user(this.user._id).subscribe((user:User)=>{
      sessionStorage.setItem('user', JSON.stringify(user));
      this.user=user;
      document.location.reload();
    })
   
  })
}
  
}
