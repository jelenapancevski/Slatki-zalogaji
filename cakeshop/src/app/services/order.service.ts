import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  uri = "http://localhost:4000";
  constructor(private http: HttpClient) { }

  orders (){
    return this.http.get(`${this.uri}/order/orders`);
  }

  add(order) {
    return this.http.post(`${this.uri}/order/add`, { "order": order });
  }
  deny(orderid) {
    return this.http.post(`${this.uri}/order/deny`, { "orderid": orderid });

  }

  accept(orderid, order) {
    return this.http.post(`${this.uri}/order/accept`, { "orderid": orderid, "order": order });

  }

  // notifications for given user id
  notifications(id) {
    return this.http.post(`${this.uri}/order/notifications`, { "id": id });

  }

  // update that user was notified 
  notified(id) {
    return this.http.post(`${this.uri}/order/notified`, { "id": id });

  }

   pending(id) {
    return this.http.post(`${this.uri}/order/pending`, { "id": id });

  }


}