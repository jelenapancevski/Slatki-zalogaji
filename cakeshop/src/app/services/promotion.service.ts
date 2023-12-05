import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  uri = "http://localhost:4000";
  constructor(private http: HttpClient) { }


  // returns all promotions
  get() {
    return this.http.get(`${this.uri}/promotion/get`);
  }
  // adds new promotion 
  add(promotion) {

    return this.http.post(`${this.uri}/promotion/add`, { "promotion": promotion });
  }

  // returns all promotions that are valid
  valid() {
    return this.http.get(`${this.uri}/promotion/valid`);
  }

  cancel(_id) {
    return this.http.post(`${this.uri}/promotion/cancel`, { "_id": _id });
  }
}
