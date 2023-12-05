
import { Component, OnInit,Input } from '@angular/core';
import { User } from '../models/user';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

function upperCase(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const uppercase = /[A-Z]+/.test(control.value);
    return uppercase ?  null:{'password': {value: "Lozinka mora sadržati bar jedno veliko slovo"}} ;
  };
}
function specialCharacter(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const specialcharacter = /\W+/.test(control.value);
    return specialcharacter ?  null:{'password': {value: " Lozinka mora sadržati bar jedan specijalni karakter"}} ;
  };
}
function number(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const number = /[0-9]+/.test(control.value);
    return number ?  null:{'password': {value: " Lozinka mora sadržati bar jedan broj"}} ;
  };
}
function letter(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const letter = /^[a-zA-Z]+/.test(control.value);
    return letter ?  null:{'password': {value: " Lozinka mora početi slovom"}} ;
  };
}
 
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})


export class PasswordComponent implements OnInit {
  @Input() user:User;
  constructor(private formbuilder: FormBuilder,private userService:UserService) { }
  hide = [true,true,true];
  PasswordChange :FormGroup;
  passwordMatch(password,current): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let passwordmatch;
      if(current) passwordmatch= password == control.value;
      else passwordmatch = password.value == control.value;
      let retval;
      if(current) retval={'currentpassword': {value: "Trenutna lozinka nije tačna"}};
      else retval= {'password': {value: "Lozinke se ne podudaraju"}} ;
      return passwordmatch ?  null: retval;
    };
  }
  ngOnInit(): void {
    let pass = new FormControl(null, [Validators.required, Validators.minLength(8), upperCase(),specialCharacter(),number()])
    this.user = JSON.parse(sessionStorage.getItem("user"));
    this.PasswordChange = new FormGroup({
      currentpassword: new FormControl(null, [Validators.required,this.passwordMatch(this.user.password,true)]),
      password: pass,
      passwordconfirm: new FormControl(null, [Validators.required, Validators.minLength(8), upperCase(),specialCharacter(),number(),this.passwordMatch(pass,false)]),
    });
  }
  changePassword(){
    this.userService.changePassword(this.user._id,this.PasswordChange.controls['password'].value).subscribe(()=>{
       //alert("Password succesfully changed");
       sessionStorage.removeItem('user');
      document.location.reload();
    })
  }
  profile(){
    document.location.replace('/profile');
  }
  
}
