import { Address } from "./address";

export class User {
    _id: String;
    
    username:String;
    
    password:String;
    
    firstname:String;

    lastname:String;
    
    address:Address;
    
    phone: String;
    
    email:String;
    
    type: String;        // visitor, staff, admin
    
    //status:String;  //pending active blocked
   
    
}
