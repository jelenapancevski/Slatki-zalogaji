import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  uri = "http://localhost:4000";
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(`${this.uri}/product/get`);
  }

  type(type) {
    return this.http.post(`${this.uri}/product/type`, { "type": type });
  }

  search(name) {
    return this.http.post(`${this.uri}/product/search`, { "name": name });
  }

  product(id) {
    return this.http.post(`${this.uri}/product/product`, { "id": id });
  }

  comment(id, comment) {
    return this.http.post(`${this.uri}/product/comment`, { "id": id, "comment": comment });

  }

  add(product) {
    return this.http.post(`${this.uri}/product/add`, { "product": product });
  }

  /*editcomment(id,comment,newcomment){
    return this.http.post(`${this.uri}/product/editcomment`, { "id": id,"comment":comment,"newcomment":newcomment });

  }*/

  upload(file, filename){
    const formData = new FormData();
    formData.append("filename",filename);
    formData.append("file",file);
   
    return this.http.post(`${this.uri}/product/upload`,formData );
  
  }

}
