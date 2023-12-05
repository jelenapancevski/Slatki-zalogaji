import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = "http://localhost:4000";
  constructor(private http: HttpClient) { }

  //get
  get() {
    return this.http.get(`${this.uri}/user/get`);
  }
  
  // login
  login(username, password) {
    return this.http.post(`${this.uri}/user/login`, { "username": username, "password": password });
  }

  // change password
  changePassword(id, newpassword) {
    return this.http.post(`${this.uri}/user/changePassword`, { "id": id, "newpassword": newpassword });

  }
  // edit personal info
  edit(user) {
    return this.http.post(`${this.uri}/user/edit`, {"user":user});
  }
  // get user
  user(id) {
    return this.http.post(`${this.uri}/user/user`, { "id": id });
  }

}
