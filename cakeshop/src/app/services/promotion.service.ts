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
  
}
