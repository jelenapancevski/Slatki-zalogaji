import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  user:User;
  newingridient: string;
  image: File;
  first:boolean = true;
  product: Product;

  index : number;
  message :String;

  //diet : Array <String>;
  constructor(private router: Router, private productService : ProductService) { }
  onFileSelected(event) {
    this.image = event.target.files[0];  
  }

  ngOnInit(): void {
    this.user=JSON.parse(sessionStorage.getItem("user"));
    if(!this.user || this.user.type !="staff") {
      this.router.navigate(['/']);
      return;
    }     
    this.product= new Product();
    this.product.ingridients = new Array(0);
  }

  addingridient(){
  this.product.ingridients.push(this.newingridient);
  this.newingridient = null;  
  }
  addproduct(){
    if(this.product.description==null ) return;
    if(this.product.description=="") return;
   this.product.comments = [];
   
    let extension = this.image.type;
    extension = extension.replace(/(.*)\//g, '');
    this.product.image=extension;

   this.productService.add(this.product).subscribe((id: String) => {
    
      //upload picture
     
       let  filename = id + "." + this.product.image;
       this.productService.upload(this.image, filename).subscribe();

    this.message = "New product added";
    document.location.reload();

  });

  
  
}

}
